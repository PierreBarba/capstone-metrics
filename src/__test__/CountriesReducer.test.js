import CountriesReducer from '../Redux/CountriesReducer';

const DataCountry = {
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

test('country reducer', () => {
  const state = CountriesReducer(undefined, {});
  expect(state).toEqual([]);
});

test('country reducer', () => {
  const state = CountriesReducer([], {
    type: 'OBTAIN_DATA/fulfilled',
    payload: [
      DataCountry],
  });
  expect(state).toEqual([DataCountry]);
});
