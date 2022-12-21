import axios from 'axios';
import DatabaseUrl from "../../database-url";

const API = DatabaseUrl + '/api/auth';

const api = axios.create({
    withCredentials: true
});

export const getUsers = async () => {
    const response = await api.get(DatabaseUrl + `/api/users`)
    return response.data;
}

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
    return response.data;
}
