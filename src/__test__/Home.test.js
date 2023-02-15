import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

describe('correct deployment of the home page', () => {
  test('Country api components matches snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});