import React from 'react';
import {connect} from 'react-redux';


const Header =({startLogout})=>(
  <header>
    <nav>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LogOut</button>
    </nav>
  </header>
);

const  mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});