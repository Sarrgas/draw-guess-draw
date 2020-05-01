import { setState, getState } from '../Stores/WindowStore'
import * as api from './Api'

const getPlayerData = () => {
    return {
        id: parseInt(getState('playerId')),
        name: getState('playerName'),
        roomCode: getState('roomCode')
    }
}

export const getImage = (id) => {
    const img = api.getImage(id)
    return img
}

export const postImage = (imageData) => {
    const playerData = getPlayerData()
    api.postImage(imageData, playerData)
}

export const postGuess = (imgId, guessData) => {
    const playerData = getPlayerData()
    api.postGuess(imgId, guessData, playerData)
}