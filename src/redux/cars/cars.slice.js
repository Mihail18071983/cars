import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./cars-operation";

const carsInitialState = {
  items: JSON.parse(localStorage.getItem("cars")) || [],
  // items: [],
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: { ...carsInitialState },
  reducers: {
    addCar(state, action) {
      state.items.unshift(action.payload);
      localStorage.setItem("cars", JSON.stringify(state.items));
    },
    removeCar(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      localStorage.setItem("cars", JSON.stringify(state.items));
      alert("Car information successfully deleted from database");
    },
    updateCarInfo(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(idx, 1, action.payload);
      localStorage.setItem("cars", JSON.stringify(state.items));
      alert("Car information successfully updated in database");
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

export const { removeCar, updateCarInfo, addCar } = carsSlice.actions;

export default carsSlice.reducer;
