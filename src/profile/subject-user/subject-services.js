import axios from 'axios';

const API = 'http://localhost:4000/api/user';

export const findUser = async (user_name) => {
    const response = await axios.get(`${API}/${user_name}`);
    const user = response.data;
    return user;
}