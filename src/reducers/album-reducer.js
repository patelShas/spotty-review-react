import { createSlice } from "@reduxjs/toolkit";
import albums from './albums.json';

const albumSlice = createSlice({
    name: 'albums',
    initialState: albums
});

export default albumSlice.reducer;