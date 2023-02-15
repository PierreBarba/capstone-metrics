import { configureStore } from '@reduxjs/toolkit';

import CountriesReducer from './CountriesReducer';

const rootReducer = {
  Countries: CountriesReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
