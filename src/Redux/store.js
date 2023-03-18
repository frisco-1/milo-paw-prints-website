import { configureStore } from "@reduxjs/toolkit";
import DFTSlice from './slices/DFTSlice';

export const store = configureStore({
  reducer: {
    DFT: DFTSlice,
  },
});