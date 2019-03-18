import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieElement from '../components/MovieElement';

test('MovieElement snapshot test', () => {
  const c = create(
    <BrowserRouter>
      <MovieElement
        imageSource="http://www.myapi.com/api/image.png"
        title="My Title"
        year={1976}
        id="1"
        movieKey="1"
      />
    </BrowserRouter>,
  );
  expect(c.toJSON()).toMatchSnapshot();
});
