import { createSlice } from "@reduxjs/toolkit";
import { dragonsOperations } from "./dragons-operations";

const initialState = {
  allDragons: null,
  currentDragon: null,
  isFetching: false,
};

const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  extraReducers: {
    [dragonsOperations.getDragons.pending]: (state) => {
      state.isFetching = true;
    },
    [dragonsOperations.getDragons.fulfilled](state, { payload }) {
      state.allDragons = payload;
    },
    [dragonsOperations.getDragons.rejected]: (state) => {
      state.isFetching = false;
    },
    [dragonsOperations.getDragon.pending]: (state) => {
      state.isFetching = true;
    },
    [dragonsOperations.getDragon.fulfilled](state, { payload }) {
      state.currentDragon = payload;
    },
    [dragonsOperations.getDragon.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export default dragonsSlice.reducer;
