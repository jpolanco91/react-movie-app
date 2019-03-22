import React from 'react';
import { create } from 'react-test-renderer';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from '../components/App';

describe('When an API url is present', () => {
  const mockConfig = {
    API_URL: 'http://varnatrd.tech/api/series/1',
  };

  const component = create(<App config={mockConfig} />);
  const spy = jest.spyOn(App.prototype, 'setMovies');
  const instance = component.getInstance();
  const mockReply = [
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

  beforeEach(() => {
    const mock = new MockAdapter(Axios);
    const { apiUrl } = mockConfig;
    mock.onGet(apiUrl).reply(200, mockReply);
    instance.setMovies(apiUrl);
  });

  it('should call the setMovies method', () => {
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch all the movies', () => {
    expect(instance.state.movies).toBeTruthy();
  });
});
