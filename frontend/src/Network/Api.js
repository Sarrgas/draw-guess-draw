import axios from 'axios'
import { setState, getState } from '../Stores/WindowStore'

const useLocalServer = true;

const rootUrl = useLocalServer ? 'https://localhost:44342' : 'https://heroku-nånting'

export const postImage = (imageData, player) => {
    axios.post(`${rootUrl}/api/image`, {imageData, player})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

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


export const postGuess = (imgId, guessData, player) => {
    axios.post(`${rootUrl}/api/guess/${imgId}`, {guessData, player})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}