import React, { useState } from 'react';
import {createScene} from './../createScene'

const ModifiableAndNonModifiableTextField = (text, isEditable, onChange, id, type = 'text') => isEditable ?  <input
type={type}
id={id}
className='scene_title'
value={text}
onChange={(e) => onChange(e)}
/> : <div>{text}</div>

function NewScene(props) {
    const [sceneTitle, setSceneTitle] = useState(props.sceneTitle);
    const [sceneDescription, setSceneDescription] = useState(props.sceneDescription);

  return (
    <div className='scene'>
        {/* <ModifiableAndNonModifiableTextField title={sceneTitle} isEditable={false} onChange={(e) => setSceneTitle(e.currentTarget.value)} /> This is broken */}
    <input
    type='text'
    id='scene_title'
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
         id='scene_description' 
         className='scene_description' 
         value={sceneDescription}
         onChange={(e) => setSceneDescription(e.currentTarget.value)}
         />
    </div>
    <div>
        <button>Save</button>
        {/* <button onClick={() => props.addScene(createScene('', ''))}>Save</button> */}

    </div>
    </div>
   )
}

export default NewScene




// Parent is saying to child - you can use this - its given as a prop
// passing down to children
// if you want it to be mutable , you want it to be rendered in something conditonal(input instead of div)