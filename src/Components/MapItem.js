import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MapItem = (props) => {
  const { name, flag, population } = props;

  return (
    <Link to={`Specification/${name}`} className="text">
      <div className="card" id="flex">
        <img className="flags" src={flag} alt="flag" />
        <div className="info">
          <h2 className="card-name">{name}</h2>
          <p className="card-p">
            Population:
            {' '}
            {population}
            {' '}
            habs
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MapItem;

MapItem.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};
