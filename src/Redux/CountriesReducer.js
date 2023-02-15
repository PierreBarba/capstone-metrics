import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const OBTAIN_DATA = 'OBTAIN_DATA';
const MapUrl = 'https://restcountries.com/v3.1/region/eur';

const CountriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${OBTAIN_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getApiCountries = createAsyncThunk(OBTAIN_DATA,
  () => axios.get(MapUrl).then((response) => {
    const MapObject = (response.data).map((country) => (
      {
        name: country.name.common,
        population: country.population,
        flag: country.flags.svg,
        id: uuidv4(),
        subregion: country.subregion,
        coordenates: {
          lat: country.latlng[0],
          long: country.latlng[1],
        },
        soweek: country.startOfWeek,
        capital: country.capital[0],
        coarms: country.coatOfArms.svg,
      }
    ));

    return MapObject;
  }));

export default CountriesReducer;
