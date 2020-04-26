import React from 'react';
import { Link } from "react-router-dom";

import {pandas, penguins, puffins} from './animals';

/* Renders a nav menu of all three animal types. */

function NavMenu() {
  return (
    <nav>
      <h2>Pandas</h2>
      <ul>
        {pandas.map(p =>
          <li key={p}>
            <Link to={`/pandas/${p}`}>{p}</Link>
          </li>
        )}
      </ul>

      <h2>Penguins</h2>
      <ul>
        {penguins.map(p =>
          <li key={p}>
            <Link to={`/penguins/${p}`}>{p}</Link>
          </li>
        )}
      </ul>

      <h2>Puffins</h2>
      <ul>
        {puffins.map(p =>
          <li key={p}>
            <Link to={`/puffins/${p}`}>{p}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavMenu;
