import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.spacexdata.com/v4";

const getDragons = createAsyncThunk(
  "dragons/fetchDragons",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/dragons");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getDragon = createAsyncThunk(
  "dragons/fetchDragon",
  async (dragonsId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`dragons/${dragonsId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dragonsOperations = {
  getDragons,
  getDragon,
};
