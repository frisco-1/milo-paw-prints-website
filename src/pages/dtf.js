import React, { useState } from 'react';
import colors from './T-ShirtCustomizer/100-Cotton_Colors';

function ProductCustomizer() {

  //Product option
  const [ProductOption, setProductOption] = useState('T-Shirt');
  //Exclusively to T-shirts Material
  const [tshirtMaterial, setTshirtMaterial] = useState('');

  function handleApparelOptionChange(event) {
    setProductOption(event.target.value);
    setTshirtMaterial(''); // Reset the t-shirt material when the apparel option changes
  }

  function handleTshirtMaterialChange(event) {
    setTshirtMaterial(event.target.value);
  }

  //Product Colors
  const [productColor, setProductColor] = useState('white'); //productColor = variable or option, setProductColor = sort of the function to be called.

  const [textColor, setTextColor] = useState('black');
  const [text, setText] = useState('');

  //Product Color
  function handleProductColorChange(color) {
    setProductColor(color);
  }
  function handleTextColorChange(color) {
    setTextColor(color);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Milo Paw Prints</h1>

      <h1>Custom Apparel</h1>

      <div>
        <div>
          <h2>Product Option:</h2>
          <select value={ProductOption} onChange={handleApparelOptionChange}>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Sweatshirt">Sweatshirt</option>
          </select>
        </div>

        {ProductOption === 'T-Shirt' && (
          <div>
            <h2>T-Shirt Material:</h2>
            <select value={tshirtMaterial} onChange={handleTshirtMaterialChange}>
              <option value="">Select Material</option>
              <option value="100% Cotton">100% Cotton</option>
              <option value="50/50 Blend">50/50 Blend</option>
            </select>
          </div>
        )}

        <p>Selected Apparel: {ProductOption}</p>
        {ProductOption === 'T-Shirt' && (
          <p>T-Shirt Material: {tshirtMaterial || 'Select Material'}</p>
        )}


        <h2> Color:</h2>
        {ProductOption === 'T-Shirt' && tshirtMaterial === "100% Cotton" && (
          <div>
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleProductColorChange(color.name)}
                className="color-button"
              >
                <span className="button-color" style={{ backgroundColor: color.hex }}></span>
                <span className="button-text">{color.name}</span>
              </button>
            ))}
            <p>Selected Color: {productColor}</p>
          </div>

        )}

        <h2>Preview:</h2>
        <div
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '1rem',
            border: '1px solid #000',
            borderRadius: '5px',
            margin: '1rem 0',
          }}
        >

          <div>


          </div>
          <div>
            <h2>Text Color:</h2>
            <button onClick={() => handleTextColorChange('black')}>Black</button>
            <button onClick={() => handleTextColorChange('white')}>White</button>
            <button onClick={() => handleTextColorChange('red')}>Red</button>
          </div>
          <div>
            <h2>Enter Your Text:</h2>
            <input type="text" value={text} onChange={handleTextChange} />
          </div>
          <div>
            <h2>Preview 2:</h2>
            <div style={{ backgroundColor: productColor, color: textColor, padding: '1rem' }}>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCustomizer;
