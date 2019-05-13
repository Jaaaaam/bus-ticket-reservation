import React, { Fragment, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {AuthContext} from '../context/Auth'

function Login(props) {
  const [ redirectToReferrer, setRedirectToReferrer ] = useState(false)
  const { authState, dispatch } = useContext(AuthContext)
  const { isAuthenticated } = authState;
  let { from } = props.location.state || { from: { pathname: "/" } };

  const login = () => {
    dispatch({ type: 'login', payload: true })
    setRedirectToReferrer(true)
  }

  const logout = () => {
    dispatch({ type: 'login', payload: false })
    setRedirectToReferrer(false)
    props.history.push("/")
  }

  const renderButton = () => {
    if (isAuthenticated) return (
      <button onClick={() => login() }>Logout</button>
    )
    return (<button onClick={() => login() }>Login</button>)
  }
  if (redirectToReferrer) return (
    <Redirect to={from} />
  )
  return (
    <Fragment>
      <div>Login Page</div>
      { renderButton() }
    </Fragment>
  )
}

export default Login;