import React, { UseState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import uuidv4 from 'uuid/v4';

import PrivateRoute from './PrivateRoute';
import Navbar from '../components/NavBar'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Account from '../pages/Account';
import Admin from '../pages/Admin';

const publicRoutes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login'},
]
const privateRoutes = [
  { path: '/account', component: Account, name: 'Account' },
  { path: '/admin', component: Admin, name: 'Admin'}
]

function PageRouter() {
  return (
    <Router>
      <Fragment>
        <Navbar routes={[...publicRoutes, ...privateRoutes]} />
        <div className="content">
          <Switch>
            {
              publicRoutes.map(({path, component}) => (
                <Route key={uuidv4()} path={path} component={component} exact/>
              ))
            }
            {
              privateRoutes.map(({path, component}) => (
                <PrivateRoute key={uuidv4()} path={path} component={component} exact />
              ))
            }
            </Switch>
        </div>
      </Fragment>
    </Router>
  )
}

export default PageRouter;