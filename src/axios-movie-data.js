import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mymovielist-ff304.firebaseio.com/',
});

export default instance;
