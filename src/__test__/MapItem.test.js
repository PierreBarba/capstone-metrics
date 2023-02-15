import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MapItem from '../Components/MapItem';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

const Country = {
  name: 'France',
  population: 67391582,
  flag: 'https://flagcdn.com/fr.svg',
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
