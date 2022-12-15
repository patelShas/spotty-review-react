import axios from 'axios';

const API = 'http://localhost:4000/api/auth';

const api = axios.create({
    withCredentials: true
});


export const createUser = async (user) => {
    const response = await api.post(`${API}/register`, user)
    return response.data;
}

export const logInUser = async (credentials) => {
    const response = await api.post(`${API}/login`, credentials)
    return response.data;
}

export const logOutUser = async (credentials) => {
    const response = await api.post(`${API}/logout`, credentials)
    return response.data;
}

export const getProfile = async () => {
    const response = await api.get(`${API}/profile`)
    return response.data;
}

export const updateProfile = async (user) => {
    const response = await api.put(`${API}/${user.username}`, user)
    return response;
}
