import React from 'react';
import { create } from 'react-test-renderer';
import MovieTrailerPlayer from '../components/MovieTrailerPlayer';

test('MovieTrailerPlayer snapshot test', () => {
  const matchParams = { params: { movieId: '1' }, isExact: true, path: '', url: '' };
  const c = create(<MovieTrailerPlayer apiUrl="http://myapi.com/api/" match={matchParams} />);
  expect(c.toJSON()).toMatchSnapshot();
});
