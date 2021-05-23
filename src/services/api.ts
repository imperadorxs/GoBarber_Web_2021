import axios from 'axios';

const api = axios.create({ baseURL: 'https://gobarber.allansantiago.dev' });

export default api;
