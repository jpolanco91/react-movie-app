import React from 'react';
import { create } from 'react-test-renderer';
import Nav from '../components/Nav';

test('Nav snapshot test', () => {
  const c = create(<Nav />);
  expect(c.toJSON()).toMatchSnapshot();
});
