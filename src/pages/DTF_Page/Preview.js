import React from 'react';
import { useSelector } from "react-redux";

function Preview() { 
  const productOption = useSelector(state => state.DFT.productOption);
  const productColor = useSelector(state => state.DFT.productColor);
  const tshirtMaterial = useSelector(state => state.DFT.tshirtMaterial);

  return (
    <>
      <h2>Preview:</h2>
            
      {/* Image Placement */}
      <div className='preview-images-container'>
        
        <div className='product-container '>

          {productOption === 'T-Shirt' && tshirtMaterial === "100% Cotton" && (
            <div id='t-shirt'>
              <img src={require(`./photos/c_100_Cotton/${productColor}_Front.jpg`)} alt="T-shirt" className='product-preview' />
            </div>
          )}
        </div>

        {/* Image from upload */}
        <div id="upload-container"></div>

      </div>
    </>   
  )
}

export default Preview;