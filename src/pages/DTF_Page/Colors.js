import React from 'react';

function Colors({ tshirtMaterial, productColor, colors, handleProductColorChange}) { 
  return (
    <>
      {/* Colors */}
      <div>
        <h2>Color:</h2>

        {tshirtMaterial === "100% Cotton" && (
          <>
            
            <div className='color-list'>
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleProductColorChange(color.name)}
                  className={`color-button`}
                >
                  <span className={`button-color ${color.name === productColor ? 'selected' : ''}`} style={{ backgroundColor: color.hex }}></span>
                </button>
              ))}

            </div>
            
            <div>
              <p>Selected Color: {productColor}</p>
            </div>

          </>

        )}
      </div>
    </>
  )
}

export default Colors;