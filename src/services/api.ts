import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoney-zeta-two.vercel.app/api',
});
