import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productOption: 'T-Shirt',
  tshirtMaterial: '',
  productColor: 'Ash',
  sizeCount: {
    "S": 0,
    "M": 0,
    "L": 0,
    "XL": 0,
    "2XL": 0,
    "3XL": 0,
    "4XL": 0,
  },
  images: [],
  description: '',
  price: 0,
  cart: [],
}

export const DFTSlice = createSlice({
  name: 'DFT',
  initialState,
  reducers: {
    handleApparelChange: (state, action) => { 
      state.productOption = action.payload
    },
    handleTshirtChange: (state, action) => {
      state.tshirtMaterial = action.payload
    },
    handleColorChange: (state, action) => {
      state.productColor  = action.payload
    },
    handleSizeChange: (state, action) => { 
      const size = action.payload.size;
      const count = action.payload.count;

      //update size count
      const newSizeCount = {
        ...state.sizeCount,
        [size]: Math.max(0, count)
      };

      // update price
      const pricePerUnit = 20;
      let totalPrice = 0;
      Object.entries(newSizeCount).forEach(([size, count]) => {
        const quantityDiff = count - state.sizeCount[size];
        totalPrice += Math.max(0, count) * pricePerUnit;
      });

      return {
        ...state,
        sizeCount: newSizeCount,
        price: totalPrice
      };
    },

    handleImage: (state, action) => {
      state.images.push(action.payload);
    },
    handleDescription: (state, action) => {
      state.description = action.payload;
    },
    handleCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  }
})

export const {
  handleApparelChange,
  handleTshirtChange,
  handleColorChange,
  handleSizeChange,
  handleImage,
  handleDescription,
  handleCart
} = DFTSlice.actions;

export default DFTSlice.reducer;