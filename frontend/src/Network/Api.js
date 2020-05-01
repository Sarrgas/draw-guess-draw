import axios from 'axios'

const useLocalServer = true;

const rootUrl = useLocalServer ? 'https://localhost:44342' : 'https://heroku-nånting'

export const postImage = (imageData, player) => {
    return axios.post(`${rootUrl}/api/image`, {imageData, player})
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.error(error);
        });
}

export const getImage = (id) => {
    return axios.get(`${rootUrl}/api/image/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.error(error);
        })
}


export const postGuess = (imgId, guessData, player) => {
    return axios.post(`${rootUrl}/api/guess/${imgId}`, {guessData, player})
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.error(error);
        });
}