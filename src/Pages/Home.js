import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getApiCountries } from '../Redux/CountriesReducer';
import MapList from '../Components/MapList';
import store from '../Redux/ConfigureStore';
import microfon from '../images/microfon.png';
import config from '../images/gear.png';
import europe from '../images/europe.png';

let flag = false;
const Home = () => {
  const [data, setData] = useState('');
  const countries = useSelector((state) => state.Countries);

  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiCountries());
      flag = true;
    }
  }, []);

  const onChange = (event) => {
    setData(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="navBar">
        <h2 className="europeNav"> Europe </h2>
        <img src={config} alt="config" className="iconSet" />
      </div>
      <div className="home-page">
        <div className="header" id="flex">
          <div className="containerImgEuro">
            <img src={europe} alt="config" className="imgEurope" />
          </div>
          <div className="containerForm">
            <h1 className="main-title">EUROPE&apos;S COUNTRY</h1>
            <div className="form-section" id="flex">
              <form className="input-search">
                <input
                  onSubmit={onSubmit}
                  className="find-item"
                  type="search"
                  onChange={onChange}
                  placeholder="your europe country"
                />
              </form>
              <img src={microfon} alt="microfon" className="icon" />
            </div>
          </div>
        </div>
        <div className="navCountries">
          <h2 className="h2countries"> Countries </h2>
        </div>
        <MapList
          CountriesData={countries.filter((country) => (
            data.toLowerCase() === '' ? country : country.name.toLowerCase().includes(data)
          ))}
        />
        <div className="up">
          <a href="navBar" className="up-arrow">
            <button className="buttonArrow" type="button">&#128316;</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
