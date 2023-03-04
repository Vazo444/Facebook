import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlices = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComment(state, {payload}){
            const idx  = state.findIndex(post => post.id === payload.id)
            
            state[idx].comments.unshift({
                id: new Date().getTime().toString(),
                username: payload.username,
                body: payload.body
            })
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const { addComment } = postsSlices.actions

export const postsReducer = postsSlices.reducer