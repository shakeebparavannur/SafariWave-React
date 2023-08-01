import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ModalWindow({ showModal, onClose }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  const handleBackHome=()=>{
    navigate('/')
  }
  const handleOrderDetails=()=>{
    navigate('/')
  }

  return (
    <>
      

      <Modal
        show={showModal}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Booking has been successfully Submitted..
          Please wait our team to check this one...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Go Home
          </Button>
          <Button variant="primary">View the Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;