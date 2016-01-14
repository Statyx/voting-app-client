import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import Router, {Route} from 'react-router';
import App from './components/App';

const routes = (
  <Route component={App}>
    <Route path="/" component={Voting} />
  </Route>);


ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
