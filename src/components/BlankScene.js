import React, { useState } from 'react';
import {createScene} from '../createScene'

function BlankScene(props) {
  return (
    <div className="text-3xl font-bold underline">
        Create Scene
    <div>
    <button onClick={() => props.addScene(createScene('', ''))}>+</button>
    </div>
    </div>
   )
}

export default BlankScene


