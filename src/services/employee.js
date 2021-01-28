import axios from 'axios'

var baseURL = 'https://crudcrud.com/api/af85cd56d3414e8faa6a30273ee766b0/nutemployee/'

const api = axios.create({
    baseURL
});

export default api;