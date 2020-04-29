import axios from 'axios'
import { setState } from '../Stores/WindowStore'
import {getImage as Canvas} from '../Painter/Canvas'

//https://localhost:44342/weatherforecast

export const getImage = () => {
    //axios.options('')
    axios.get('https://localhost:44342/api/image/0')
    .then(function (response) {
        // handle success
        console.log(response.data);
        setState('currentImage', response.data.image)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}

export const postImage = () => {
    const image =  Canvas()
    axios.post('https://localhost:44342/api/image', {
        image,
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
}