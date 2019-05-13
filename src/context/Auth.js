import React, { useReducer } from 'react';

const initialState = {
  isAuthenticated: false
}

let reducer = ( state, action ) => {
  switch (action.type) {
    case 'login':
      return { isAuthenticated: action.payload }
  }
}

const AuthContext = React.createContext(initialState)

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{authState, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};