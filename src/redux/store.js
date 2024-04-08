import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

// import storage from "redux-persist/lib/storage";

// const contactsConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
