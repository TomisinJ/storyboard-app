import './Scene.css';
import React, { useState } from 'react';
import {createScene} from '../createScene'

function BlankScene(props) {
  return (
    <div className="">
      <button onClick={() => props.addScene(createScene('', ''))}>+</button>
    </div>
   )
}

export default BlankScene


