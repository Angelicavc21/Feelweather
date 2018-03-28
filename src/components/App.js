import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import '../style/main.css'
import Home from './Home'
import About from './About'
import SignIn from './SignIn';
const App = () => (
  <div>
  <SignIn/>
  <Router>
    <div className="list">
      <ul className="route container-fluid">
        <li  className=" col-5 text-center">
          <NavLink activeStyle = {{borderBottom : ' 3px solid rgb(255, 205, 0)'}}  className="" to="/reto-clima">AHORA</NavLink>
        </li>
        <li className="col-5 text-center">
          <NavLink activeStyle = {{borderBottom : ' 3px solid rgb(255, 205, 0)'}} to="/diario">DIARIO</NavLink>
        </li>
      </ul>
    <hr />
      <Route exact path="/reto-clima" component={Home} />
      <Route path="/diario" component={About} />
    </div>
  </Router>
  </div>

)
export default App;
