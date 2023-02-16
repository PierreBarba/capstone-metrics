import React from 'react';
import PropTypes, { shape } from 'prop-types';
import MapItem from './MapItem';

const MapList = (props) => {
  const { CountriesData } = props;
  return (
    <div className="countriesgroup">
      {CountriesData.map((country) => {
        const {
          name, id, population, flag,
        } = country;
        return (
          <MapItem
            key={id}
            name={name}
            population={population}
            flag={flag}
          />
        );
      })}
    </div>
  );
};

export default MapList;

MapList.propTypes = {
  CountriesData: PropTypes.arrayOf(shape).isRequired,
};
