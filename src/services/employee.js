import axios from 'axios'
const CRUD_CRUD_CODE = 'af85cd56d3414e8faa6a30273ee766b0';
const baseURL = `https://crudcrud.com/api/${CRUD_CRUD_CODE}/nutemployee/`

const api = axios.create({
    baseURL
});

export default api;