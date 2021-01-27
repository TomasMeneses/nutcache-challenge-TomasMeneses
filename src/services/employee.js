import axios from 'axios'

var baseURL = 'https://crudcrud.com/api/4c64f51b15e040688e4744feb7ce21b8/nutemployee/'

const api = axios.create({
    baseURL
});

export default api;