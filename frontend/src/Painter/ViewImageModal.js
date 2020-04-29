import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getState} from '../Stores/WindowStore'


const ViewImageModal = () => {
    const [show, setShow] = useState(false);
    const [img, setImage] = useState()
  
    const handleClose = () => setShow(false);
    let handleShow = () => {
        let img = getState('currentImage')
        setImage(img);
        setShow(true);
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Show image in modal
            </Button>

            <Modal show={show} onHide={handleClose} centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Time to guess!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img alt="Your masterpiece" width="400" height="400" id="masterpiece" src={img}></img>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Submit your guess!
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ViewImageModal