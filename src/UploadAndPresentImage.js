import React, { useState } from "react";

function UploadAndPresentImage() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [editImage, setEditImage] = useState(false);

    const presentImage = (
        <div className='text-center h-40 bg-slate-100 rounded-md p-1 text-xs font-bold border-dashed border-2 border-slate-300'>
            <input 
            type="file"
            name="thisImage"
            onChange={(event) => {
                setSelectedImage(event.target.files[0]);
                setEditImage(true);
            }}
            />
        </div>
    )

    const uploadImage = (
        <div>
        {selectedImage && (
            <div>
            <img 
            className="w-full rounded-md"
            alt="image not found"
            src={URL.createObjectURL(selectedImage)}
            />
            <button className='w-full text-xs font-bold bg-slate-100 rounded-md h-6' onClick={() => setSelectedImage(null)}>REMOVE</button>
            </div>
            )}
        </div>
    )

  return editImage ? uploadImage : presentImage

};

export default UploadAndPresentImage

{/* <label className='text-center h-40 bg-slate-100 rounded-md p-1 text-xs font-bold border-dashed border-2 border-slate-300'>
<input className='hidden'
type='file' 
accept='image/png, image/jpeg, image/jpg' 
/>
UPLOAD YOUR IMAGES
</label> */}