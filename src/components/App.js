import React from 'react';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import '../style/main.css'
import Home from './Home'
import About from './About'
const App = () => (
  <Router>
    <div>
      <ul className="route">
        <li>
          <NavLink to="/reto-clima">Ahora</NavLink>
        </li>
        <li>
          <NavLink to="/diario">Diario</NavLink>
        </li>
      </ul>
    <hr />
      <Route exact path="/reto-clima" component={Home} />
      <Route path="/diario" component={About} />
    </div>
  </Router>

)
export default App;
