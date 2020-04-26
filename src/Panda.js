import React from 'react'
import {useParams} from 'react-router-dom';

/** Mixed: finds ID itself from routing */

function Panda( /* no props */ ) {
  let id = useParams().id;
  return <h2>Panda: {id}</h2>
}

export default Panda;