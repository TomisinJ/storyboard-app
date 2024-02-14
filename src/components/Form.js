import React from 'react';
import '../input.css';

function Form() {
  return (
    <div className= 'bg-slate-300 text-slate-400 m-5 rounded-md inline-grid p-2 gap-2'>
        <input
        type='text'
        id='key'
        className='text-center bg-slate-100 rounded-md w-full p-1 text-xs font-bold'
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.currentTarget.value)}
        />
        <UploadAndPresentImage/>
        <div>
            <input 
            type='text'
            id='value' 
            className='text-center bg-slate-100 rounded-md w-full p-1 h-32 text-xs font-bold' 
            value={sceneDescription}
            onChange={(e) => setSceneDescription(e.currentTarget.value)}
            />
        </div>

        <div className='flex justify-evenly gap-2'>
            <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6 focus:bg-slate-400 focus:text-slate-50' onClick={() => {handleClick()}}>
                SAVE
            </button>
            <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6 focus:bg-slate-400 focus:text-slate-50' onClick={() => {handleClick()}}>
                DELETE
            </button>
        </div>
    </div>
  )
}

export default Form
