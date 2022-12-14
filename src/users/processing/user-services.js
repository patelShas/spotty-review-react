import axios from 'axios';

const API = 'http://localhost:4000/api/';


export const createUser = async (user) => {
    const response = await axios.post(`${API}register`, user)
    return response.data;
}

export const logInUser = async (credentials) => {
    const response = await axios.post(`${API}login`, credentials)
    return response.data;
}
