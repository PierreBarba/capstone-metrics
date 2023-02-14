import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Specification = () => {
  const { name } = useParams();
  const country = useSelector((state) => state.Countries.find((count) => count.name === name));

  return (

    <div className="Specification">
      <Link to="/" className="arrow-back">
        <button type="button">&#11013;</button>
      </Link>
      <h1 className="Specification-title">{`${country.name}`}</h1>
    </div>
  );
};

export default Specification;
