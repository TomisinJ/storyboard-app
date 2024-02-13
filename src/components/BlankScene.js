import '.././input.css';
import React, { useState } from 'react';
import {createScene} from '../createScene'

function BlankScene(props) {
  return (
    <div className='m-5'>
      <button className='hover:bg-slate-200 p-2 rounded-full text-s font-bold' onClick={() => props.addScene(createScene('TITLE', 'DESCRIPTION'))}>+</button>
    </div>
   )
}

export default BlankScene


