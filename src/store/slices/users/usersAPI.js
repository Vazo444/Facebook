import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data: images} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        return users.map(user => ({
            id: user.id.toString(),
            username: user.name,
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            friends: Math.round(Math.random() * 300 + 100),
            posts: [
                ...images.filter(post => post.albumId === user.id)
                         .map(post => ({
                            id: post.id,
                            img: post.url,
                            body: post.body
                         }))
            ]
        }))
    }
)