import axios from 'axios';
// https://sandra-back-end.herokuapp.com 
// http://localhost:59877 
// https://schedule-bsck.herokuapp.com/
const instance = axios.create({
  baseURL: 'https://schedule-bsck.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
