import React, {useState}  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toolbar from './Toolbar'
import Canvas, { getImage } from './Canvas'
import {getState, setState} from '../Stores/WindowStore'


//Background fill?
//ctx.globalCompositeOperation = 'destination-over'

const tempworkaround = () => {
    const canvas = document.getElementById('canvas2');
    return canvas.toDataURL('image/jpeg', 0.1);
}

const Painter = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        let img = getImage();
        setState('currentImage', img);
        setShow(true);
    }
    return (
        <div id="painter">
            <div id="sidebar">
                <Toolbar />
                <div id="modal">
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
            </div>
            <div id="canvas">
                <Canvas />
            </div>
            
        </div>
    )
}

export default Painter
