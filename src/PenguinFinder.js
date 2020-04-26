import React from 'react'
import {useParams} from 'react-router-dom';
import Penguin from "./Penguin";

/** Logical: finds ID itself from routing */

function PenguinFinder( /* no props */ ) {
  let id = useParams().id;
  return <Penguin id={id} />
}

export default PenguinFinder;