import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars-operation";

const carsInitialState = {
  items: JSON.parse(localStorage.getItem("cars")) || [],
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    removeCar(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(idx, 1);
    },
    updateCarInfo(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(idx, 1, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeCar, updateCarInfo } = carsSlice.actions;

export default carsSlice.reducer;
