import axios from 'axios'
import { setState } from '../Stores/WindowStore'

const useLocalServer = true;

const rootUrl = useLocalServer ? 'https://localhost:44342' : 'https://heroku-nånting'

export const getImage = (id) => {
    axios.get(`${rootUrl}/api/image/${id}`)
        .then(function (response) {
            console.log(response.data);
            setState('currentImage', response.data.image)
            return response.data
        })
        .catch(function (error) {
            console.error(error);
        })
}

export const postImage = (image) => {
    axios.post(`${rootUrl}/api/image`, {image})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

export const postGuess = (imgId, guess) => {
    axios.post(`${rootUrl}/api/guess/${imgId}`, {guess})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}