import React from 'react';
import { create } from 'react-test-renderer';
import MovieTrailerPlayer from '../components/MovieTrailerPlayer';

describe('When a valid movieID is added in the browser url box', () => {
  let matchParams;
  let mockMovieData;

  beforeEach(() => {
    matchParams = { params: { movieId: '1' }, isExact: true, path: '', url: '' };
    mockMovieData = {
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
    };
  });

  it('should render the movie’s trailer in a youtube player', () => {
    const c = create(
      <MovieTrailerPlayer apiUrl="http://varnatrd.tech/api/series/" match={matchParams} />,
    );
    const instance = c.getInstance();
    expect(instance.state.currentMovieTrailerUrl).toBe('');
    instance.setMovieData(mockMovieData);
    expect(instance.state.currentMovieTrailerUrl).toBeTruthy();
  });
});
