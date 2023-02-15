import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapList from '../Components/MapList';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

const CountriesData = [{
  name: 'Slovakia',
  population: 5458827,
  flag: 'https://flagcdn.com/sk.svg',
  id: '99999',
}];

describe('page deploy testing', () => {
  test('MapList components matches snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <MapList CountriesData={CountriesData} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
