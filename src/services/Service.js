import axios from 'axios';

let API = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: { 
    'Content-Type': 'application/json'
  },
});

API.defaults.withCredentials = true;

export default API;
