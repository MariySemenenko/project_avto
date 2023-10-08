import axios from 'axios';

axios.defaults.baseURL = 'https://65217a54a4199548356d42c6.mockapi.io';
const limit = 8;

async function api(page) {
  try {
    const res = await axios.get(`/adverts/?limit=${limit}&page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default api;
