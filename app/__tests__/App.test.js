import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

test('App snapshot test', () => {
  const mockConfig = {
    API_URL: 'http://www.myapi.com/api',
  };
  const c = create(
    <BrowserRouter>
      <App config={mockConfig} />
    </BrowserRouter>,
  );
  expect(c.toJSON()).toMatchSnapshot();
});
