/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';


class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/layout">Layout</Link></li>
      </ul>
    );
  }
}

export default Navigation;
