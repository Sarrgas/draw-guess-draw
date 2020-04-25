import React from 'react'
import Toolbar from './Toolbar'
import Canvas from './Canvas'
import ViewImageModal from './ViewImageModal'


const Painter = () => {
    return (
        <div id="painter">
            <div id="sidebar">
                <Toolbar />
                <div id="modal">
                    <ViewImageModal />
                </div>
            </div>
            <div id="canvas">
                <Canvas />
            </div>
            
        </div>
    )
}

export default Painter
