import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    //    const searchContact = contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(searchName.toLowerCase())
    //    );
  },
});

export const selectNameFilter = (state) => state.filters.name;

// Експортуємо генератори екшенів та редюсер
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
