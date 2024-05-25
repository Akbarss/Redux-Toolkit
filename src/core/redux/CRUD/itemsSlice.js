// src/store/itemsSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
          },
        };
      },
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {
      const { id, title } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.title = title;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;

export default itemsSlice.reducer;
