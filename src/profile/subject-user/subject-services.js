import axios from 'axios';
import DatabaseUrl from "../../database-url";

const API = DatabaseUrl + '/api/user';

export const findUser = async (user_name) => {
    const response = await axios.get(`${API}/${user_name}`);
    const user = response.data;
    return user;
}