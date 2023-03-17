import React, { useState } from 'react';
import colors from './T-ShirtCustomizer/100-Cotton_Colors';
import { cottonSize, blendSizes } from './T-ShirtCustomizer/SizeAvailability';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './DTF_Page/DTF.css';
import ModelPopup from './DTF_Page/ModelPopup';
import Product from './DTF_Page/Product';
import TShirtMat from './DTF_Page/TShirtMat';
import Quantity from './DTF_Page/Quantity';
import Colors from './DTF_Page/Colors';
import ImageFile from './DTF_Page/ImageFile';
import Description from './DTF_Page/Description';
import Price from './DTF_Page/Price';
import Preview from './DTF_Page/Preview';
import CartPage from './Checkout/CartPage';


function ProductCustomizer(props) {
  // Modal/Popup
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);

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

  //Description-Textarea
  const [description, setDescription] = useState('');




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

  //Cart Info
  const [cart, setCart] = useState([]);

  //Add to Cart
  function handleAddToCart(product) { 
    setCart([...cart, product]);
  }

  const product = {
    ProductOption: props.ProductOption,
    tshirtMaterial: props.tshirtMaterial,
    sizeCount: props.sizeCount,
    sizes: props.sizes,
    productColor: props.productColor,
    description: props.description,
    price: props.price
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
      

      <h1>Custom Apparel</h1>

      <Container className='product-customizer'>
        <Row>
          <Col lg={6}>

            <ModelPopup show={showModal} onHide={handleClose} />

            {/* Selection */}
            <Product
              ProductOption={ProductOption}
              handleApparelOptionChange={handleApparelOptionChange}
            />

            <TShirtMat
              ProductOption={ProductOption}
              tshirtMaterial={tshirtMaterial}
              handleTshirtMaterialChange={handleTshirtMaterialChange}
            />

            <Quantity
              sizes={sizes}
              sizeCount={sizeCount}
              handleSizeChange={ handleSizeChange}
            />

            <Colors
              tshirtMaterial={tshirtMaterial}
              productColor={productColor}
              colors={colors}
              handleProductColorChange={ handleProductColorChange}
            />

            <ImageFile
              handleFileChange={handleFileChange}
            />

            <Description
              description={description}
              setDescription={setDescription }
            />

            <Price
              price={price}
            />
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>

          </Col>

          {/* Image Preview */}
          <Col lg={6}>

            <Preview
              ProductOption={ProductOption}
              tshirtMaterial={tshirtMaterial}
              productColor={productColor}
            />

          </Col>
          <Col>
            <CartPage cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default ProductCustomizer;
