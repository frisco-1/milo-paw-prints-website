import React from "react";

function Product(props) { 
  return (
    <>
      {/* Product Option */}
            <div className='product-option'>
              <h2>Product Option:</h2>

              <select value={props.ProductOption} onChange={props.handleApparelOptionChange} className='select-button'>
                <option value="T-Shirt">T-Shirt</option>
                {/* <option value="Hoodie">Hoodie</option>
            <option value="Sweatshirt">Sweatshirt</option> */}
              </select>
            </div>
      
      <p>Selected Apparel: {props.ProductOption}</p>
    </>
  )
}

export default Product;