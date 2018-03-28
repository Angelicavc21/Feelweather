import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions';
import logoblancocorto from '../assets/brand/logoblancocorto.png'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import '../style/main.css'
import Home from './Home'
import About from './About' 

const Header =({user,onLogin,startLogout})=>(
  <div>
    <header className="navbar navbar-expand flex-column flex-md-row">
    <nav className="navbar navbar-expand ">
      <a className="navbar-brand mr-0 mr-md-2" href="#">
        <img src={logoblancocorto} width="50" height="50" className="d-inline-block align-top" alt="logo"/>
      </a>
      <form className="form-inline mr-auto form-search flex-row">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-search" type="submit"><i className="fas fa-search"></i></button>
      </form>
       <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex ">
        <li className="nav-item"><img width="32" className="rounded-circle"src={user.photoURL}/></li>
        <li className="nav-item">{user.displayName}</li>
      </ul> 
      <button className="btn btn-logout my-2 my-sm-0" type="submit" onClick={startLogout}><i className="fas fa-ellipsis-v"></i></button>
    </nav>
  </header>
  </div>
);

/* const  mapDispatchToProps = (dispatch) => ({
  startLogout: () => (startLogout())
});

export default connect(null,mapDispatchToProps)(Header); */
export default Header;