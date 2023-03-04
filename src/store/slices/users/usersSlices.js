import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlices = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: null
    },
    reducers: {
        loginCurrentUser(state, {payload}) {
            const current = state.users.find(user => user.email === payload.email && user.password === payload.password)
            return{
                ...state,
                currentUser: {...current}
            }
        },
        logOutCurrentUser(state, {payload}){
            return {
                ...state,
                currentUser: null
            }
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                users: [...payload]
            }
        }
    }
})

export const selectUsers = state => state.users

export const { loginCurrentUser, logOutCurrentUser } = usersSlices.actions

export const usersReducer = usersSlices.reducer