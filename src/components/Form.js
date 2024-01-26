import React, { useState } from 'react'

/*
This for is the template for creating a new scene
*/

/*
1st - have a name element that represents the name/title
- this also has a state

2nd - change the value of the name element with an event function
- we want the value of name to be the value of the element
- 
*/

function Form() {
    const [name, setName] = useState("");

    function valueChange(e) {
        setName(e.target.value);
    }

  return (
<div className='scene'>
  <input
  type='text'
  id='scene_title'
  className='scene_title'
  value={name}
  onChange={valueChange}
  />
  <label className='custom_file_upload'>
    <input type='file' accept='image/png, image/jpeg, image/jpg' className='file_upload_input'/>
    Upload your images
  </label>
  <div>
    <textarea type='text' id='scene_description' className='scene_description'/>
  </div>
  <div className='tags'>
    <p>{name}</p>
    <p>tag 2</p>
  </div>
  <div>
    <button>Add Scene</button>
  </div>
</div>
   )
}

export default Form
