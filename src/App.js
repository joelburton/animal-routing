import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavMenu from './NavMenu';
import Panda from './Panda';
import PenguinFinder from './PenguinFinder';
import Puffin from './Puffin';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>

        {/* Panda component searches params itself */}
        <Route path="/pandas/:id">
          <Panda />
        </Route>

        {/* PenguinFinder searches params, renders Penguin, passing prop */}
        <Route path="/penguins/:id">
          <PenguinFinder />
        </Route>

        {/* Puffin has no idea it's routed */}
        <Route
          path="/puffins/:id"
          render={({ match, location, history }) =>
            <Puffin id={match.params.id} />} />

      </Switch>
    </Router>
  );
}

export default App;
