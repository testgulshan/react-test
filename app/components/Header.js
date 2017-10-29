import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="global-header">
      <ul className="site-nav">
        <li>
          <a href="">Docs</a>
        </li>
        <li>
          <a href="">Tutorials</a>
        </li>
        <li>
          <a href="">Community</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>

      <div className="user-nav">
        <strong className="user-name">{props.user}</strong>
      </div>

    </header>
  );
};


Header.defaultProps = {
  user: 'Guest',
};

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
