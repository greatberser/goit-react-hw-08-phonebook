import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65b7793146324d531d54a8c6.mockapi.io/goit-react-hw-07-phonebook';

export const fetchContacts = createAsyncThunk (
    'contatacts/fetchAll',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }  
    }
);

export const addContacts = createAsyncThunk (
    'contacts/addContacts',
    async (contacts, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contacts)
            return response.data;
        } catch (e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContacts = createAsyncThunk (
    'contacts/deleteContacts',
    async (contactsId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);