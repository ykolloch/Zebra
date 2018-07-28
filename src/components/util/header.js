import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    );
  }
}

exports.module
