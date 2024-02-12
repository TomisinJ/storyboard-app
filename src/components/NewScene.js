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
    <div className= 'bg-slate-300 m-5 rounded-md inline-block items-center p-2'>
        <input
        type='text'
        id='key'
        className='border-gray-500 border-b-2 m-2 w-full'
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.currentTarget.value)}
        />
        <label className='custom_file_upload'>
            <input type='file' accept='image/png, image/jpeg, image/jpg' className='file_upload_input'/>
            Upload your images
        </label>
        <div>
            <textarea 
            type='text'
            id='value' 
            className='scene_description' 
            value={sceneDescription}
            onChange={(e) => setSceneDescription(e.currentTarget.value)}
            />
        </div>
        <label className="switch">
            <input type="checkbox" onClick={() => {handleClick()}}></input>
            <span className="slider round"></span>
        </label>
    </div>
    )

    const newScene = (
        <div className='bg-slate-50 rounded'>
        <p>{sceneTitle}</p>
    <label className='custom_file_upload'>
        <input type='file' accept='image/png, image/jpeg, image/jpg' className='file_upload_input'/>
        Upload your images
    </label>
    <div>
    <p>{sceneDescription}</p>
    </div>
    <div>
        <button onClick={() => {handleEdit()}}>Edit</button>
    </div>
    </div>
    )

  return isEditing ? editingScene : newScene
}

export default NewScene
