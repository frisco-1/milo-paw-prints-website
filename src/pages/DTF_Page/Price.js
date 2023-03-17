import React from 'react';

function Price({ProductOption, tshirtMaterial, sizeCount, sizes, productColor, description, price}) { 

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
