import React from 'react';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import '../style/main.css'
import Home from './Home'
import About from './About'
const App = () => (
  <Router>
    <div className="list">
      <ul className="route container-fluid">
        <li className="col-5  text-center">
          <NavLink to="/reto-clima">AHORA</NavLink>
        </li>
        <li className="col-5 text-center">
          <NavLink to="/diario">DIARIO</NavLink>
        </li>
      </ul>
    <hr />
      <Route exact path="/reto-clima" component={Home} />
      <Route path="/diario" component={About} />
    </div>
  </Router>

)
export default App;
