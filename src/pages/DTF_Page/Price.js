import React from 'react';
import { useSelector } from "react-redux";

function Price() { 

  const price = useSelector(state => state.DFT.price);

  return (
    <>
      {/* Cart */}
      <div>
        <h2>Price:</h2>
        <p>${price}</p>
      </div>
    </>
  )
}

export default Price;
