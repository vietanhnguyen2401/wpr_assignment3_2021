import axios from "axios"

export const customAxios = axios.create({
    baseURL: "http://localhost:3002",
    timeout: 10000
})
