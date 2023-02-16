import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapItem from '../Components/MapItem';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

const Country = {
  name: 'Ukraine',
  population: 44134693,
  flag: 'https://flagcdn.com/is.svg',
  id: 'e115687c-660f-48e8-8da0-bf9809a9140c',
  subregion: 'Eastern Europe',
  coordenates: {
    lat: 49,
    long: 32,
  },
  soweek: 'monday',
  capital: 'Kyiv',
  coarms: 'https://mainfacts.com/media/images/coats_of_arms/ua.svg',
};

describe('Test page deployment', () => {
  test('MapItem components matches snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MapItem
            name={Country.name}
            population={Country.population}
            flag={Country.flag}
          />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
