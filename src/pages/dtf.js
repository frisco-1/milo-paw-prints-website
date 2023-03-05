import React, { useState } from 'react';

function TshirtCustomizer() {
  const [apparelOption, setApparelOption] = useState('T-Shirt');
  const [tshirtMaterial, setTshirtMaterial] = useState('');
  const [tshirtColor, setTshirtColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [text, setText] = useState('');

  function handleApparelOptionChange(event) {
    setApparelOption(event.target.value);
    setTshirtMaterial(''); // Reset the t-shirt material when the apparel option changes
  }

  function handleTshirtMaterialChange(event) {
    setTshirtMaterial(event.target.value);
  }

  function handleTshirtColorChange(color) {
    setTshirtColor(color);
  }

  function handleTextColorChange(color) {
    setTextColor(color);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      {/* Brand Name */}
      <h1>Milo Paw Prints</h1>

      <h1>Custom Apparel</h1>

      <div>
        <h2>Apparel Option:</h2>
        <select value={apparelOption} onChange={handleApparelOptionChange}>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Sweatshirt">Sweatshirt</option>
        </select>
      </div>

      {apparelOption === 'T-Shirt' && (
        <div>
          <h2>T-Shirt Material:</h2>
          <select value={tshirtMaterial} onChange={handleTshirtMaterialChange}>
            <option value="">Select Material</option>
            <option value="100% Cotton">100% Cotton</option>
            <option value="50/50 Blend">50/50 Blend</option>
          </select>
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
        <p>Selected Apparel: {apparelOption}</p>
        {apparelOption === 'T-Shirt' && (
          <p>T-Shirt Material: {tshirtMaterial || 'Select Material'}</p>
        )}
        <div>
          <h2>T-Shirt Color:</h2>
          <button onClick={() => handleTshirtColorChange('white')}>White</button>
          <button onClick={() => handleTshirtColorChange('black')}>Black</button>
          <button onClick={() => handleTshirtColorChange('red')}>Red</button>
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
          <h2>Preview:</h2>
          <div style={{ backgroundColor: tshirtColor, color: textColor, padding: '1rem' }}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TshirtCustomizer;
