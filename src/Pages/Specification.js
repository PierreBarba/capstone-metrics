import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Specification = () => {
  const { name } = useParams();
  const country = useSelector((state) => state.Countries.find((count) => count.name === name));

  return (

    <div className="Specification">
      <div className="navBarDetails ">
        <div className="navBarBack">
          <Link to="/" className="arrow-back">
            <button type="button">&#10094;</button>
          </Link>
          <h4 className="phaBack"> europe countries </h4>
        </div>
      </div>
      <div className="shield">
        <img className="imgShield" src={country.coarms} width="200px" height="200px" alt="shieldArms" />
        <h1 className="Specification-title">{`${country.name} Shield`}</h1>
      </div>
      <div className="divCountryDetails"><h3 className="h2CountryDetails">Country Details</h3></div>
      <div className="subRegion">
        <h3> Subregion </h3>
        <h3 className="subRegionData">{country.subregion}</h3>
      </div>
      <div className="coordenates">
        <h3>Coordenates</h3>
        <h3 className="coordenatesData">
          {country.coordenates.lat}
          ,
          {country.coordenates.long}
        </h3>
      </div>
      <div className="specificationPopulation">
        <h3>Population</h3>
        <h3 className="populationData">
          {country.population}
          {' '}
          habs
        </h3>
      </div>
      <div className="starWeek">
        <h3>Start of week </h3>
        <h3 className="starWeekData">
          {' '}
          {country.soweek}
          {' '}
        </h3>
      </div>

      <div className="specificationCapital">
        <h3>Capital </h3>
        <h3 className="capitalData">
          {' '}
          {country.capital}
          {' '}
        </h3>

      </div>
    </div>
  );
};

export default Specification;
