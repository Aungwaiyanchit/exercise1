import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})

export const login = (formData) => API.post('auth/login/', formData)
export const followingLists = () => API.get('users/following_lists')
export const fetchNewfeeds = () => API.get('posts/userfeeds/')

export const createPost = (formData) => API.post('posts/', formData)