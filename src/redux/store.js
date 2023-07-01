import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/cars.slice';

export const store = configureStore({
    reducer: {
        cars: carsReducer,
    },
});