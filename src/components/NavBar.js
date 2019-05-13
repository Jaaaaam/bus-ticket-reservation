import React from 'react';
import { Link } from "react-router-dom";
import uuidv4 from 'uuid/v4';


function Navbar({ routes }) {
  console.log(routes, 'ROUTES')
  return (
    <div className=
    "navbar">
      <div className="navbar-content">
        <div className="logo">Logo</div>
        <ul>
          {
            routes.map(({ path, name }) => (
              <li key={uuidv4()}>
                <Link to={path}>{ name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;