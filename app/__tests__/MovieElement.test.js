import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import MovieElement from '../components/MovieElement';

describe('When a valid image url, title, year, id, key are present,', () => {
  let comp;
  let rootComponent;

  beforeEach(() => {
    comp = create(
      <BrowserRouter>
        <MovieElement
          imageSource="http://www.myapi.com/api/image.png"
          title="My Title"
          year={1976}
          id="1"
          key="1"
        />
      </BrowserRouter>,
    );
    rootComponent = comp.root;
  });

  it('should render the movie image', () => {
    const imageElement = rootComponent.find(element => element.type === 'img');
    expect(imageElement).toBeTruthy();
  });

  it('should render the movie title', () => {
    const movieTitleElement = rootComponent.find(
      element => element.props.className === 'title is-4',
    );
    expect(movieTitleElement).toBeTruthy();
  });

  it('should render the movie year', () => {
    const movieTitleElement = rootComponent.find(
      element => element.props.className === 'subtitle is-6',
    );
    expect(movieTitleElement).toBeTruthy();
  });

  it('should link to the movie trailer', () => {
    const movieTitleElement = rootComponent.find(element => element.type === Link);
    expect(movieTitleElement.props.to).toBeTruthy();
  });
});
