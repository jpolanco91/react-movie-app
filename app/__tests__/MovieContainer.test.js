import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieContainer from '../components/MovieContainer';

test('MovieContainer snapshot test', () => {
  const moviesMock = [
    {
      _id: '1',
      title: 'My title',
      year: 2008,
      genres: ['Crime', 'Thriller', 'Action'],
      covertImage: 'http://www.myimage.com/myImage.png',
      fullImage: 'http://www.myimage.com/myImage.png',
      trailer: 'http://www.mytrailer.com/trailer',
      rating: 9.5,
      categories: [],
      subTitle: 'Subtitle',
      isNew: false,
      isViewed: false,
      isFavorite: false,
      isRecent: false,
    },
  ];

  const c = create(
    <BrowserRouter>
      <MovieContainer movies={moviesMock} />
    </BrowserRouter>,
  );
  expect(c.toJSON()).toMatchSnapshot();
});
