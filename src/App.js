import React from 'react';
import Router from './routes'
import './assets/scss/main.scss';
import { AuthProvider } from './context/Auth'

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
