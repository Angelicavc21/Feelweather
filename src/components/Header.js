import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions';
import logoblancocorto from '../assets/brand/logoblancocorto.png'

const Header =({user,onLogin,startLogout})=>(
  <header>
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img src={logoblancocorto} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
      </a>
      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
      </form>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">{user.displayName}</li>
      </ul>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={startLogout}><i className="fas fa-ellipsis-v"></i></button>
    </nav>
  </header>
);

/* const  mapDispatchToProps = (dispatch) => ({
  startLogout: () => (startLogout())
});

export default connect(null,mapDispatchToProps)(Header); */
export default Header;