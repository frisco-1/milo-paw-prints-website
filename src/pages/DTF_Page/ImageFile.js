import React from "react";

function ImageFile({ handleFileChange}) { 
  return (
    <>
      {/* Add Image */}
        <div className='file-input'>
          <h2>Add Images:</h2>
    
          <input type="file" accept="image/png, image/jpeg, image/raw" onChange={handleFileChange} />

          <input type="file" accept="image/png, image/jpeg, image/raw" onChange={handleFileChange} />
        </div>
    </>
  )
}

export default ImageFile;