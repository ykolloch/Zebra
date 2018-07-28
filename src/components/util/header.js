import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to={'/'}>Home</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

exports.module
