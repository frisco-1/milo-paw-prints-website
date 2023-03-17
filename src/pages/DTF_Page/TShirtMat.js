import React from "react";

function TShirtMat({ProductOption, tshirtMaterial, handleTshirtMaterialChange }) { 
  return (
    <>
      {/* T-Shirt Material */}
            {ProductOption === 'T-Shirt' && (
              <div className='tshirt-material'>
                <h2>T-Shirt Material:</h2>

                <select value={tshirtMaterial} onChange={handleTshirtMaterialChange} className='select-button'>
                  <option value="">Select Material</option>
                  <option value="100% Cotton">100% Cotton</option>
                  <option value="50/50 Blend">50/50 Blend</option>
                </select>
              </div>
            )}


            {ProductOption === 'T-Shirt' && (
              <p>T-Shirt Material: {tshirtMaterial || 'Select Material'}</p>
            )}
    </>
  )
}

export default TShirtMat;