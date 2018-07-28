import React from 'react';
import ReactDOM from 'react-dom';
import Header from './util/header';
import Home from './blog/home';
import About from './util/about';
import EditPost from './admin/editPost';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/edit'} component={EditPost}/>
          </Switch>
        </div>
    );
  }
}

ReactDOM.render(
  <Router>
  <App /></Router>,
  document.getElementById('root')
);
