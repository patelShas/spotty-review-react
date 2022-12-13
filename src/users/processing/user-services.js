import axios from 'axios';

const REVIEWS_API = 'http://localhost:4000/api/users';

export const findUser = async (user_id) => {
    const response = await axios.get(`${REVIEWS_API}?user_id=${user_id}`);
    const users = response.data;
    return users;
}
export const deleteUser = async (user_id) => {
    const response = await axios
        .delete(`${REVIEWS_API}/${user_id}`)
    return response.data
}

export const createUser = async (user) => {
    const response = await axios.post(REVIEWS_API, user)
    return response.data;
}


export const updateUser = async (user) => {
    await axios.put(`${REVIEWS_API}/${user._id}`, user);
    return user;
}

// placeholder
export const registerUser = (user) => {
    console.log(user)
}