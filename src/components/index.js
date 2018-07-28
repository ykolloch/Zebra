import React from 'react';
import ReactDOM from 'react-dom';
import Header from './util/header';
import MOCK_DATA from '../mock/data.json';
import Content from './blog/content';

class App extends React.Component {


  render() {
    return (
      <div>
        <Header />
        {MOCK_DATA.data.map((data, i) =>
            <Content data={data} key={i} />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
