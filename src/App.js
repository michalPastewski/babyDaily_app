import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

import Home from './pages/Home';
import Meal from './pages/Meal';
import Diaper from './pages/Diaper';
import Sleep from './pages/Sleep';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav>
            <h1>babyDaily</h1>
            <ul>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="meal">karmienie</NavLink>
              </li>
              <li>
                <NavLink to="diaper">pielucha</NavLink>
              </li>
              <li>
                <NavLink to="sleep">sen</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meal" component={Meal} />
        <Route path="/diaper" component={Diaper} />
        <Route path="/sleep" component={Sleep} />
      </Switch>

    </Router>
    );
}

export default App;
