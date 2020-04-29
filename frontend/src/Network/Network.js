import axios from 'axios'

//https://localhost:44342/weatherforecast

export const getImage = () => {
    //axios.options('')
    axios.get('https://localhost:44342/weatherforecast')
    .then(function (response) {
        // handle success
        console.log(response.data);
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
    axios.post('https://localhost:44342/api/image', {
        firstName: 'Fred',
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
}