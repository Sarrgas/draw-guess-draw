import React from 'react'
import {getImage, postImage} from '../Network/Network'
import {setState} from '../Stores/WindowStore'
import {getImage as Canvas} from '../Painter/Canvas'

const apiGetImage = async () => {
    const num = document.getElementById('number').value
    await getImage(num)
}

const apiPostImage = () => {
    const playerId = document.getElementById('playerid').value
    const playerName = document.getElementById('playername').value
    const roomcode = document.getElementById('roomcode').value
    setState('playerId', playerId)
    setState('playerName', playerName)
    setState('roomCode', roomcode)
    const img = Canvas()
    postImage(img)
}

const DevToolbox = () => {
    return (
        <div> 
            <div style={{width: '250px', display: 'inline-block', border: '1px solid black', padding: '5px'}}>
                <h4>Session handlers</h4>
                <label for="roomcode" style={{display: 'inline-block'}}>Room code:</label>
                <input type="text" id="roomcode" defaultValue="abc123" style={{display: 'inline-block', width: '100px'}}></input>
            </div>
            <div style={{width: '250px', display: 'inline-block', border: '1px solid black', padding: '5px'}}>
                <h4>Image handlers</h4>
                <label for="number" style={{display: 'inline-block'}}>Image id:</label>
                <input type="number" id="number" style={{display: 'inline-block', width: '100px'}}></input>
                <button id="dummy" onClick={apiGetImage} style={{width: '150px'}} > Api GET Image </button>
                <button id="dummy" onClick={apiPostImage} style={{width: '150px'}} > Api POST Image </button>
            </div>
            <div style={{width: '250px', display: 'inline-block', border: '1px solid black', padding: '5px'}}>
                <h4>Player handlers</h4>
                <label for="number" style={{display: 'inline-block'}}>Player name: </label>
                <input type="text" style={{display: 'inline-block', width: '130px'}} id="playername" defaultValue="Knugen"></input>
                <label for="number">Player id: </label>
                <input type="number" style={{display: 'inline-block', width: '130px'}} id="playerid" defaultValue="0"></input>
            </div>
           
        </div>
    )
}

export default DevToolbox