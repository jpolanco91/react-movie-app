import React from 'react';

const Nav = () => (
  <nav className="navbar is-warning is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
      </a>
      <div
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
    </div>
  </nav>
);

export default Nav;
