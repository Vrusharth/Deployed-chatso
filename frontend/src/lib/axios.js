import axios from 'axios'

export const axiousInstance = axios.create({
    baseURL:"http://localhost:5001/api",
    withCredentials: true,
})