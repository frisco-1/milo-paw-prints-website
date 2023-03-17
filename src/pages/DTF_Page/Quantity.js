import React from 'react';

function Quantity({sizeCount, handleSizeChange,sizes}) { 
  return (
    <>
      {/* Quantity */}
            <div>
              <h2>Quantity:</h2>

              <ul className='quantity-list'>
                {Object.entries(sizes).map(([size, available]) => {
                  if (!available) {
                    return null;
                  }
                  return (
                    <>

                      <li key={size} className='quantity-item quantity-label'>
                        {size}:{" "}
                        <button className='quantity-button' onClick={() => handleSizeChange(size, sizeCount[size] - 1)}>
                          -
                        </button>{" "}
                        {sizeCount[size]}{" "}
                        <button className='quantity-button' onClick={() => handleSizeChange(size, sizeCount[size] + 1)}>
                          +
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>

              <div>
                <p>S: {sizeCount.S} M:{sizeCount.M} L:{sizeCount.L} XL:{sizeCount.XL} 2XL:{sizeCount['2XL']}</p>
              </div>

            </div>
    </>
  )
}

export default Quantity;