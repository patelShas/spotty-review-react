import axios from 'axios';
import {getAuth} from "../../details/processing/detail-services";

const SEARCH_API = 'https://api.spotify.com/v1/search';

export const searchAlbums = async (query) => {
    const access_token = await getAuth();

    const response = await axios.get(`${SEARCH_API}?q=${query}&type=album`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    });
    const info = response.data.albums.items;
    return info;
}