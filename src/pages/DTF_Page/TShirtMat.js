import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleTshirtChange } from '../../Redux/slices/DFTSlice';

function TShirtMat() { 
  const tshirtMaterial = useSelector(state => state.DFT.tshirtMaterial);
  const productOption = useSelector(state => state.DFT.productOption);

  const dispatch = useDispatch();

  const handleTshirtMaterialChange = e => { 
    dispatch(handleTshirtChange(e.target.value));
  }

  return (
    <>
      {/* T-Shirt Material */}
        {productOption === 'T-Shirt' && (
          <div className='tshirt-material'>
            <h2>T-Shirt Material:</h2>

            <select value={tshirtMaterial} onChange={handleTshirtMaterialChange} className='select-button'>
              <option value="">Select Material</option>
              <option value="100% Cotton">100% Cotton</option>
              <option value="50/50 Blend">50/50 Blend</option>
            </select>
          </div>
        )}
        
        {productOption === 'T-Shirt' && (
          <p>T-Shirt Material: {tshirtMaterial || 'Select Material'}</p>
        )}
    </>
  )
}

export default TShirtMat;