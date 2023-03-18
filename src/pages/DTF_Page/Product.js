import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleApparelChange } from "../../Redux/slices/DFTSlice";

function Product() {
  const productOption = useSelector(state => state.DFT.productOption);
  const dispatch = useDispatch();

  const ApparelChange = e => {
    dispatch(handleApparelChange(e.target.value));
  };

  return (
    <>
      {/* Product Option */}
      <div className='product-option'>
        <h2>Product Option:</h2>

        <select value={productOption} onChange={ApparelChange} className='select-button'>
          <option value="T-Shirt">T-Shirt</option>
          {/* <option value="Hoodie">Hoodie</option>
          <option value="Sweatshirt">Sweatshirt</option> */}
        </select>
      </div>
            
      
      <p>Selected Apparel: {productOption}</p>
    </>
  )
}

export default Product;