import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItem,
  deleteItem,
  requestContacts,
} from "../components/services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await requestContacts();
      return data; // Це значення буде записане в action.payload
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // Це значення буде записане в action.payload
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await addItem(contact);
      return data; // Це значення буде записане в action.payload
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // Це значення буде записане в action.payload
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteItem(id);
      return data.id; // Це значення буде записане в action.payload
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
