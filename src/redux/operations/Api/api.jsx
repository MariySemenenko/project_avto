import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "../../catalog/catalogSlice";


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

//
// export const api = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get("/tasks");
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };
//

export default api;
