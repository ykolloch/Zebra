import React, {
  PureComponent
} from 'react';
import ReactDOM from 'react-dom';
import Content from './content';
import MOCK_DATA from '../../mock/data.json';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="container">
        {MOCK_DATA.data.map((data, i) =>
            <Content data={data} key={i} />
        )}
      </div>
    );
  }
}
