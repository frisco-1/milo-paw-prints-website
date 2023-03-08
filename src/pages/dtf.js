import React, { useState } from 'react';
import colors from './T-ShirtCustomizer/100-Cotton_Colors';
import { cottonSize, blendSizes } from './T-ShirtCustomizer/SizeAvailability';
import Header from './Header/header';
import { Container } from 'react-bootstrap';
import './DTF_Page/DTF.css';


function ProductCustomizer() {

  //Product option
  const [ProductOption, setProductOption] = useState('T-Shirt');

  //Exclusively to T-shirts Material
  const [tshirtMaterial, setTshirtMaterial] = useState('');

  //Product/Apparel Option Change
  function handleApparelOptionChange(event) {
    setProductOption(event.target.value);
    setTshirtMaterial(''); // Reset the t-shirt material when the apparel option changes
  }

  //T-Shirt Material Change
  function handleTshirtMaterialChange(event) {
    setTshirtMaterial(event.target.value);
  }

  //Product Color
  const [productColor, setProductColor] = useState('Ash');

  //Product Color Function
  function handleProductColorChange(color) {
    setProductColor(color);
  }

  //Quantity
  const [sizeCount, setSizeCount] = useState({
    "S": 0,
    "M": 0,
    "L": 0,
    "XL": 0,
    "2XL": 0,
    "3XL": 0,
    "4XL": 0,
  })

  //Diplays Different Sizes for each material type.
  let sizes;

  switch (tshirtMaterial) {
    case '':
      sizes = 0;
      break;
    case '100% Cotton':
      sizes = cottonSize;
      break;
    case '50/50 Blend':
      sizes = blendSizes;
      break;
    default:
      console.log('Invalid t-shirt material');
      break;
  }

  // Price
  const [price, setPrice] = useState(0);

  const handleSizeChange = (size, count) => {
    //For Counter
    setSizeCount((prevSizeCount) => ({
      ...prevSizeCount,
      [size]: Math.max(0, count),
    }));

    //Price Function
    setPrice((prevPrice) => prevPrice + (count - sizeCount[size]) * 20);
  };

  //Handle File Change
  function handleFileChange(e) {
    const file = e.target.files[0];
    const fileType = file.type;

    // Compress the image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set the canvas size to the image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Compress the image
        const compressedImageData = canvas.toDataURL(fileType, 0.5);

        // Display the compressed image
        const previewImage = document.createElement("img");
        previewImage.src = compressedImageData;
        previewImage.style.maxWidth = "100%";
        const previewContainer = document.getElementById("upload-container");
        previewContainer.innerHTML = "";
        previewContainer.appendChild(previewImage);
      };
    }
  }


  return (
    <div>
      <Header />

      <h1>Custom Apparel</h1>

      <Container className='product-customizer'>
        <div className='product-customizer-main'>
          <div className='product-customizer-left'>
            <div className='product-option'>
              <h2>Product Option:</h2>

              <select value={ProductOption} onChange={handleApparelOptionChange}>
                <option value="T-Shirt">T-Shirt</option>
                {/* <option value="Hoodie">Hoodie</option>
            <option value="Sweatshirt">Sweatshirt</option> */}
              </select>

            </div>

            {ProductOption === 'T-Shirt' && (
              <div className='tshirt-material'>
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

            {/* Quantity */}
            <div>
              <h2>Quantity:</h2>

              <ul className='quantity-list'>
                {Object.entries(sizes).map(([size, available]) => {
                  if (!available) {
                    return null;
                  }
                  return (
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
                  );
                })}
              </ul>

            </div>

            <div>
              <h2>Color:</h2>
              {tshirtMaterial === "100% Cotton" && (
                <>
                  <div className='color-list'>
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleProductColorChange(color.name)}
                        className="color-button"
                      >
                        <span className="button-color" style={{ backgroundColor: color.hex }}></span>
                      </button>
                    ))}

                  </div>
                  <div>
                    <p className='selected'>Selected Color: {productColor}</p>
                  </div>

                </>

              )}
            </div>

            {/* File Upload */}
            <div className='file-input'>
              <h2>Add Images:</h2>
              <input type="file" accept=".png,.jpeg,.raw" onChange={handleFileChange} />
            </div>

            {/* Description */}
            <div>
              <h2>Description:</h2>
              <textarea id="Description" name='Description'></textarea>
            </div>

            {/* Quote and Buy */}
            <div>
              <h2>Price & Checkout:</h2>
              <p>${price}</p>
              <button>Checkout and Submit</button>
            </div>
          </div>


          <div className='product-customizer-right'>
            <h2>Preview:</h2>
            <div className='preview-images-container'>
              {/* Image Placement */}
              <div className='product-container '>

                {ProductOption === 'T-Shirt' && tshirtMaterial === "100% Cotton" && (
                  <div id='t-shirt'>
                    <img src={require(`../photos/c_100_Cotton/${productColor}_Front.jpg`)} alt="T-shirt" className='product-preview' />
                  </div>
                )}
              </div>

              {/* Image from upload */}
              <div id="upload-container"></div>

            </div>
          </div>
        </div>
      </Container>


    </div>
  );
}

export default ProductCustomizer;
