import '../input.css';
import React, { useState } from 'react';
import {createScene} from './../createScene';
import './NewScene.css';


function NewScene(props) {

    const [sceneTitle, setSceneTitle] = useState(props.sceneTitle);
    const [sceneDescription, setSceneDescription] = useState(props.sceneDescription);
    const [isEditing, setEditing] = useState(true);

    function handleClick() {
        setEditing(false);
    }

    function handleEdit() {
        setEditing(true);
    }

    const editingScene = (
    <div className= 'bg-slate-300 m-5 rounded-md inline-grid p-2 gap-2'>
        <input
        type='text'
        id='key'
        className='text-center bg-slate-100 rounded-md w-full p-1 text-xs font-bold'
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.currentTarget.value)}
        />
        <label className='text-center h-40 bg-slate-100 rounded-md p-1 text-xs font-bold border-dashed border-2 border-slate-300'>
            <input className='hidden'
            type='file' 
            accept='image/png, image/jpeg, image/jpg' 
            />
            UPLOAD YOUR IMAGES
        </label>
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
            <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6 focus:bg-slate-400' onClick={() => {handleClick()}}>
                SAVE
            </button>
             <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6 focus:bg-slate-400' onClick={() => {handleClick()}}>
                DELETE
            </button>

        </div>

    </div>
    )

    const newScene = (
        <div className='bg-slate-50 m-5 border-2 rounded-md inline-grid p-2 gap-2'>
            <p className='text-center bg-slate-100 rounded-md w-full p-1 text-xs font-bold'>
                {sceneTitle}
            </p>
            <img className='h-40'>
            </img>
            <div>
                <p className='text-center bg-slate-100 rounded-md w-full p-1 h-32 text-xs font-bold'>
                    {sceneDescription}
                </p>
            </div>
            <div>
                <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6' onClick={() => {handleEdit()}}>
                    EDIT
                </button>
            </div>
        </div>
    )

  return isEditing ? editingScene : newScene
}

export default NewScene
