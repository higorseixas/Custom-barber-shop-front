import axios from "axios";

const customBackAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CUSTOM_BACK
})

export default customBackAPI