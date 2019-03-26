import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieContainer from '../components/MovieContainer';
import MovieElement from '../components/MovieElement';

describe('When a valid array of movies is present', () => {
  let moviesMock;
  let component;
  let rootComponent;

  beforeEach(() => {
    moviesMock = [
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

    component = create(
      <BrowserRouter>
        <MovieContainer movies={moviesMock} />
      </BrowserRouter>,
    );

    rootComponent = component.root;
  });

  it('should render a MovieElement component', () => {
    const movieElement = rootComponent.find(element => element.type === MovieElement);
    expect(movieElement).toBeTruthy();
  });

  it('should have movies prop not null', () => {
    const movieContainer = rootComponent.find(element => element.type === MovieContainer);
    expect(movieContainer.props.movies).toBeTruthy();
  });
});
