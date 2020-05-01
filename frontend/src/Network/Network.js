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
    return api.getImage(id).then((img) => {
        setState('currentImage', img)
        return img
    })
}

export const postImage = (imageData) => {
    const playerData = getPlayerData()
    return api.postImage(imageData, playerData)
}

export const postGuess = (imgId, guessData) => {
    const playerData = getPlayerData()
    return api.postGuess(imgId, guessData, playerData)
}