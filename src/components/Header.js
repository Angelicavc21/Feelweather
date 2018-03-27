import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions';

const Header =({startLogout})=>(
  <header>
    <nav>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LogOut</button>
    </nav>
  </header>
);

const  mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null,mapDispatchToProps)(Header);