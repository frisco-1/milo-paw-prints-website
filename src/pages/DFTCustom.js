import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DTF_Page/DTF.css';
import ModalP from './DTF_Page/ModalP';
import Product from './DTF_Page/Product';
import TShirtMat from './DTF_Page/TShirtMat';
import Quantity from './DTF_Page/Quantity';
import ColorsPage from './DTF_Page/ColorsPage';
import FileUpload from './DTF_Page/FileUpload';
import Description from './DTF_Page/Description';
import Price from './DTF_Page/Price';
import Preview from './DTF_Page/Preview';
// import CartPage from './Checkout/CartPage';


function DFTCustom() {
  return (
    <div>

      <h1>Custom Apparel</h1>

      <Container className='product-customizer'>
        <Row>
          <Col lg={6}>
            <ModalP/>
            <Product/>
            <TShirtMat />
            <Quantity />
            <ColorsPage/>
            <FileUpload />
            <Description/>
            <Price/>
          </Col>

          {/* Image Preview */}
          <Col lg={6}>
            <Preview/>
          </Col>

          <Col>
            {/* <CartPage/> */}
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default DFTCustom;
