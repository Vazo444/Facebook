import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleTxt(state, {payload}) {
            return payload
        },
        
    }
})

export const selectSearch = state => state.search

export const { toggleTxt } = searchSlices.actions

export const searchReducer = searchSlices.reducer