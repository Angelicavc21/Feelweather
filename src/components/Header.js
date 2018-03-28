import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions';
import logoblancocorto from '../assets/brand/logoblancocorto.png'

const Header =({user,onLogin,startLogout})=>(
  <header className="navbar navbar-expand flex-column flex-md-row">
    <nav className="nav navbar-expand">
      <a className="navbar-brand mr-0 mr-md-2" href="#">
        <img src={logoblancocorto} width="50" height="50" className="d-inline-block align-top" alt="logo"/>
      </a>
      <form className="form-inline mr-auto form-search">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-search" type="submit"><i className="fas fa-search"></i></button>
      </form>
      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex my-2 my-md-0">
        <li className="nav-item"><img width="32" className="rounded-circle"src={user.photoURL}/></li>
        <li className="nav-item">{user.displayName}</li>
      </ul>
      <button className="btn btn-logout my-2 my-sm-0" type="submit" onClick={startLogout}><i className="fas fa-ellipsis-v"></i></button>
    </nav>
  </header>
);

/* const  mapDispatchToProps = (dispatch) => ({
  startLogout: () => (startLogout())
});

export default connect(null,mapDispatchToProps)(Header); */
export default Header;