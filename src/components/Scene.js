import './Scene.css';
import React, { useState } from 'react'

/*
Two templates a needed: one for editing, one for displaying
Then an if statement to return each option

- dont return the option, return the options which are constants
- define the constants options above the returns
*/

/*
Next, define the state in which you present each one > when you're editing
- will need a save button for the form - when its saved editing mode is false
- does it have to  be onSubmit?
*/

/*
state of the scene presented is managed by the isediting state
- true or false

we want the state to change when the submit button is pressed
so, a function needs to be handles when submit is pressed > which changes the state
*/

/**
- Next - present input from a form in a tag
 */

function Scene() {

const [isEditing, setEditing] = useState(true);

function handleClick() {
  setEditing(false);
}

const templateScene = (
  <div className='scene'>
  <input type='text' id='scene_title' className='scene_title'/>
  <label className='custom_file_upload'>
    <input type='file' accept='image/png, image/jpeg, image/jpg' className='file_upload_input'/>
    Upload your images
  </label>
  <div>
    <textarea type='text' id='scene_description' className='scene_description'/>
  </div>
  <div className='tags'>
    <p>tag 1</p>
    <p>tag 2</p>
  </div>
  <div>
    <button onClick={handleClick}>Add Scene</button>
  </div>
</div>
)

const presentingScene = (
  <div className='scene'>
    <p className='scene_title'>props.title</p>
    <img className='custom_file_upload'/>
    <div>
    <p className='scene_description'>props.description</p>
    </div>
    <div className='tags'>
      <p>tag 1</p>
      <p>tag 2</p>
    </div>
  </div>
)

  return <li>{isEditing? templateScene : presentingScene}</li>
}

export default Scene

/*
Note - we need a form, and then we need to be able to edit the scene -
these are not the same things, they need to be created separately

*/