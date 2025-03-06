import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      /*
        #In Vanilla(older) Redux mutating of the state was not allowed & returning was mandatory
          const newState = [...state];
          newState.items.push(action.payload);
          return newState;
      */

      state.items.push(action.payload); // Mutating the state
      // Now in redux Toolkit we `have` to mutate the state but Redux behind the scene doing the same using Immer library
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items.length = 0; // original state items = []

      // return { items:[] };   this new [] replaced original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
