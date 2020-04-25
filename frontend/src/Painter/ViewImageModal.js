import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getState, setState} from '../Stores/WindowStore'
import {getImage} from './Canvas'


const ViewImageModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        let img = getImage();
        setState('currentImage', img);
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
                <img alt="Your masterpiece" width="400" height="400" id="masterpiece" src={getState('currentImage')}></img>
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