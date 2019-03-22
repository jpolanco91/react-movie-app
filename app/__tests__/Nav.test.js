import React from 'react';
import { create } from 'react-test-renderer';
import Nav from '../components/Nav';

describe('When nav renders', () => {
  let component;
  let rootComponent;

  beforeEach(() => {
    component = create(<Nav />);
    rootComponent = component.root;
  });

  it('should have the site icon', () => {
    const siteIcon = rootComponent.find(element => element.type === 'img');
    expect(siteIcon).toBeTruthy();
  });

  it('should have a hamburger menu', () => {
    const hamburgerMenu = rootComponent.find(
      element => element.props.className === 'navbar-burger burger',
    );
    expect(hamburgerMenu).toBeTruthy();
  });
});
