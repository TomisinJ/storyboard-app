import React from 'react'

function Scene() {
  return (
    <div>
      <input type='text' id='scene_title' className='scene_title'/>
      <div>
        <input type='file' accept='image/png, image/jpeg, image/jpg' id='scene_image' className='scene_image'/>
        <input type='file' accept='image/png, image/jpeg, image/jpg' id='scene_image' className='scene_image'/>
        <input type='file' accept='image/png, image/jpeg, image/jpg' id='scene_image' className='scene_image'/>
      </div>
      <div>
        <input type='text' id='scene_description' className='scene_description'/>
      </div>
      <div>
        <p>tag 1</p>
        <p>tag 2</p>
      </div>
    </div>
  )
}

export default Scene
