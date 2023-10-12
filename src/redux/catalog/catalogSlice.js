import { createSlice } from '@reduxjs/toolkit';
//import api from 'redux/operations/Api/api';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: false,
    error: null,
    filters: {
      selectedMake: '',
      selectedPrice: '',
      minMileage: '',
      maxMileage: '',
    },
    filtersFavorite: {
      selectedMake: '',
      selectedPrice: '',
      minMileage: '',
      maxMileage: '',
    },
  },
  reducers: {
    firstAdverts: (state, action) => {
      state.isLoading = true;

      state.adverts = [...state.adverts, ...action.payload];
      state.page = state.page + 1;
    },
    setAdverts: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.adverts = [...state.adverts, ...action.payload];
    },
    onNextPage: state => {
      state.isLoading = false;
      state.error = null;
      state.page = state.page + 1;
    },
    setFilters: (state, action) => {
      state.isLoading = false;
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    setFiltersFavorite: (state, action) => {
      state.isLoading = false;
      state.filtersFavorite = {
        ...state.filtersFavorite,
        ...action.payload,
      };
    },
    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  setAdverts,
  onNextPage,
  firstAdverts,
  setFilters,
  setFiltersFavorite,
  isLoading,
  error,
} = catalogSlice.actions;
export default catalogSlice.reducer;

//

// import { createSlice } from "@reduxjs/toolkit";
// import api from "redux/operations/Api/api";

// const handlePending = (state) => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const catalogSlice = createSlice({
//   name: "catalog",
//   initialState: {
//     adverts: [],
//     page: 1,
//     isLoading: false,
//     error: null,
//     filters: {
//       selectedMake: "",
//       selectedPrice: "",
//       minMileage: "",
//       maxMileage: "",
//     },
//     filtersFavorite: {
//       selectedMake: "",
//       selectedPrice: "",
//       minMileage: "",
//       maxMileage: "",
//     },

//   },
//   reducers: {
//     firstAdverts: (state, action) => {

//       state.adverts = [...state.adverts, ...action.payload];
//       state.page = state.page + 1;
//     },
//     setAdverts: (state, action) => {
//       state.adverts = [...state.adverts, ...action.payload];
//     },
//     onNextPage: (state) => {

//       state.page = state.page + 1;
//     },
//     setFilters: (state, action) => {
//       state.filters = {
//         ...state.filters,
//         ...action.payload,
//       };
//     },
//     setFiltersFavorite: (state, action) => {
//       state.filtersFavorite = {
//         ...state.filtersFavorite,
//         ...action.payload,
//       };
//     },
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },

//     [api.pending]: handlePending,

//     [api.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [api.rejected]: handleRejected,

//   },
// });

// export const {
//   setAdverts,
//   onNextPage,
//   firstAdverts,
//   setFilters,
//   setFiltersFavorite,
//   setIsLoading,
// } = catalogSlice.actions;
// export default catalogSlice.reducer;
