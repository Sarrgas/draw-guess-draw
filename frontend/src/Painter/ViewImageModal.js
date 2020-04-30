import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getState} from '../Stores/WindowStore'
import {postGuess} from '../Network/Network'


const ViewImageModal = () => {
    const [show, setShow] = useState(false);
    const [img, setImage] = useState()
  
    const submitGuess = () => {
        const guess = document.getElementById('guess').value
        const imgid = document.getElementById('number').value
        postGuess(imgid, guess)
        setShow(false);
    }

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

            <Modal show={show} onHide={submitGuess} centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Time to guess!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img alt="Your masterpiece" width="400" height="400" id="masterpiece" src={img}></img>
            </Modal.Body>
            <Modal.Footer>
                <input type="text" id="guess"></input>
                <Button variant="primary" onClick={submitGuess}>
                    Submit your guess!
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ViewImageModal