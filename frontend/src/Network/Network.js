import axios from 'axios'
import { setState, getState } from '../Stores/WindowStore'

const useLocalServer = true;

const rootUrl = useLocalServer ? 'https://localhost:44342' : 'https://heroku-nånting'

export const getImage = (id) => {
    axios.get(`${rootUrl}/api/image/${id}`)
        .then(function (response) {
            console.log(response.data);
            setState('currentImage', response.data)
            return response.data
        })
        .catch(function (error) {
            console.error(error);
        })
}

export const postImage = (imageData) => {
    const player = {
        id: parseInt(getState('playerId')),
        name: getState('playerName')
    }
    axios.post(`${rootUrl}/api/image`, {imageData, player})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

export const postGuess = (imgId, guessData) => {
    const player = {
        id: parseInt(getState('playerId')),
        name: getState('playerName')
    }
    axios.post(`${rootUrl}/api/guess/${imgId}`, {guessData, player})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}