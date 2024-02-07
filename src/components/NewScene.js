import './Scene.css';
import React, { useState } from 'react';
import {createScene} from './../createScene'


function NewScene(props) {

    const key = document.getElementById('key');
    const value = document.getElementById('value');
    
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
        <div className='scene'>
    <input
    type='text'
    id='key'
    className='scene_title'
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
    <div>
        <button id="add" onClick={() => {handleClick()}}>Save</button>

    </div>
    </div>
    )

    const newScene = (
        <div className='scene'>
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
