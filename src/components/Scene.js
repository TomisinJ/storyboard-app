import './Scene.css';
import React from 'react'


/*
Two templates a needed: one for editing, one for displaying
Then an if statement to return each option
*/

function Scene(props) {
  return (
    <div className='scene'>
      <input type='text' id='scene_title' className='scene_title'/>
      <label className='custom_file_upload'>
        <input type='file' accept='image/png, image/jpeg, image/jpg' id={props.id} className='file_upload_input'/>
        Upload your images
      </label>
      <div>
        <textarea type='text' id='scene_description' className='scene_description'/>
      </div>
      <div className='tags'>
        <p>tag 1</p>
        <p>tag 2</p>
      </div>
    </div>
  )
}

export default Scene
