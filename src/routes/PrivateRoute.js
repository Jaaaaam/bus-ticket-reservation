import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../context/Auth'

function PrivateRoute({ component: Component, ...rest }) {
  const { authState } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props => authState.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
      >
    </Route>
  )
}

export default PrivateRoute;