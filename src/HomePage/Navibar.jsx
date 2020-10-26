import React from 'react';
import { authenticationService } from '@/_services';
import { Link } from 'react-router-dom';
import { history } from '@/_helpers';




const Navibar = () => {

  function logout() {
    authenticationService.logout();
    history.push('/login');
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link">Home</Link>
        <a onClick={logout} className="nav-item nav-link">Logout</a>
      </div>
    </nav>
  )
}

export default Navibar;
