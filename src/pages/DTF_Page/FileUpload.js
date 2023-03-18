//Dear future me, you can literally copy this code for future projects. It allows you to grab and stores/dispatches the compressesd image data. It also allows you to diplay them on the webpage.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleImage } from '../../Redux/slices/DFTSlice';

function FileUpload() { 

  const images = useSelector(state => state.DFT.images);
  const dispatch = useDispatch();


  function handleFileChange(e) {
    const file = e.target.files[0];
    const fileType = file.type;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = event => {

      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set the canvas size to the image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Compress the image
        const compressedImageData = canvas.toDataURL(fileType, 0.5);

        // Dispatch the compressed image data to the store
        dispatch(handleImage(compressedImageData));
      };
    }
  }

  return (
    <>
      {/* You can add as many file inputs, each image will be stored separately in the Redux state and displayed on the page. */}
      <div className='file-input'>
        <h2>Add Images:</h2>
    
        <input type="file" accept="image/png, image/jpeg, image/raw" onChange={handleFileChange} />

        <input type="file" accept="image/png, image/jpeg, image/raw" onChange={handleFileChange} />
      </div>

      <div id="upload-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt="customer-img" style={{width: "300px", marginBottom: "10px"}} />
        ))}
      </div>
    </>
  )
}

export default FileUpload;
