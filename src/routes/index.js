import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { history } from '../store';

import Home from './Home';

export default () => (
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
