import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function ModalP() {

  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      show={showModal}
      onHide={setShowModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Instructions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>1. Select your Product Option</h4>
        <p>
          Choose your preferred apparel. More options to come.
        </p>
        <h4>2. Choose your T-Shirt Material</h4>
        <p>
          For now, the only available option is 100% Cotton.
        </p>
        <h4>3. Quantity</h4>
        <p>
          Select how many prints you want.
        </p>
        <h4>4. Color</h4>
        <p>
          Select the color you want.
        </p>
        <h4>5. Add Image</h4>
        <p>
          Choose the image you want from your device. We will print with the provided image. The image must be ready to print, we will not make edits.
        </p>
        <h4>6. Description</h4>
        <p>
          You are able to write down the size of the image you want to print. The minimum size is 15" x 15". We allow back and/or front prints.
        </p>
        <h4>7. Price & Checkout</h4>
        <p>
          After you are satisfied with your order, proceed to the checkout area.
        </p>

        <h4>This website is working process. Thank you for visiting Milo Paw Prints :D</h4>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalP;