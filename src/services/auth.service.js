import axios from "axios";
import { jwtDecode } from "jwt-decode";

// REGISTER
export const register = (data, callback) => {
    axios.post("https://express-galeraz-backend.vercel.app/api/auth/v1/register", data).then((res) => {
        callback(true, res)
        console.log(res.data)
        console.log(res.message)
    })
    .catch((err) => {
        callback(false, err)
        console.log(err.message)
    })
}

// LOGIN
export const login = (data, callback) => {
    axios.post("https://express-galeraz-backend.vercel.app/api/auth/v1/login", data).then((res) => {
        // console.log(res.data.data.token)
        callback(true, res)
    })
    .catch((err) => {
        console.log(err)
        callback(false, err)
    })
}

// GET USER DATA
export const getId = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded)
    return decoded.userId
}