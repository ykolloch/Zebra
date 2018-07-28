import React from 'react';
import ReactDOM from 'react-dom';
import Header from './util/header';
import Home from './blog/home';
import About from './util/about';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div>
          <Header />
          <Route exact path={'/'} component={Home}/>
          <Route path={'/about'} component={About}/>
        </div>
    );
  }
}

ReactDOM.render(
  <Router>
  <App /></Router>,
  document.getElementById('root')
);
