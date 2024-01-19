import './Scene.css';
import React from 'react'

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
    <button>Add Scene</button>
  </div>
</div>
)

// const presentingScene = (
//   <div className='scene'>
//     <p className='scene_title'>{props.title}</p>
//     <img className='custom_file_upload'/>
//     <div>
//     <p className='scene_description'>{props.description}</p>
//     </div>
//     <div className='tags'>
//       <p>tag 1</p>
//       <p>tag 2</p>
//     </div>
//   </div>
// )

function Scene() {
  // return <li>{isEditing? templateScene : presentingScene}</li>
  return templateScene
}

export default Scene
