import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "shared/api/api";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllCars(); 
            localStorage.setItem("cars", JSON.stringify(response));
            return response;
        } catch (error) {
            return rejectWithValue(error.toString());
        }
    }
);