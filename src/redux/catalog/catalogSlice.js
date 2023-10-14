
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'redux/operations/Api/api';

export const fetchAdverts = createAsyncThunk(
  'catalog/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const res = await api(page);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: true,
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
     
      state.adverts = [...state.adverts, ...action.payload];
      state.page = state.page + 1;
    },
    setAdverts: (state, action) => {
      state.error = null;
      state.adverts = [...state.adverts, ...action.payload];
    },
    onNextPage: state => {
      state.error = null;
      state.page = state.page + 1;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    setFiltersFavorite: (state, action) => {
      state.filtersFavorite = {
        ...state.filtersFavorite,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const {
  firstAdverts,
  firstAdvertsSuccess,
  firstAdvertsError,
  setAdverts,
  onNextPage,
  setFilters,
  setFiltersFavorite,
  isLoading,

  error,
} = catalogSlice.actions;

export default catalogSlice.reducer;


//



