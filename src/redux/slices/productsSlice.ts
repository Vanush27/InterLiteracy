import {createSlice} from '@reduxjs/toolkit';

type TInitialState = {
  products: [];
};

export const initialState: TInitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;
