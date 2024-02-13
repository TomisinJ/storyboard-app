import React, { useState } from "react";

function UploadAndPresentImage() {

    const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
        {selectedImage && (
        <div>
        <img 
        className="w-full"
        alt="image not found"
        src={URL.createObjectURL(selectedImage)}
        />
        <button onClick={() => setSelectedImage(null)}> remove </button>
        </div>
        )}
 
        <div className='text-center h-40 bg-slate-100 rounded-md p-1 text-xs font-bold border-dashed border-2 border-slate-300'>
            <input 
            type="file"
            name="thisImage"
            onChange={(event) => {
                setSelectedImage(event.target.files[0]);
            }}
            />
        </div>
    </div>
  );
};

export default UploadAndPresentImage

{/* <label className='text-center h-40 bg-slate-100 rounded-md p-1 text-xs font-bold border-dashed border-2 border-slate-300'>
<input className='hidden'
type='file' 
accept='image/png, image/jpeg, image/jpg' 
/>
UPLOAD YOUR IMAGES
</label> */}