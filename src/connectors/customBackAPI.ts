import axios from "axios";
import { parseCookies } from "nookies";

const { 'nextauth-token': token } = parseCookies()

const customBackAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CUSTOM_BACK
})

if (token) {
    customBackAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default customBackAPI;