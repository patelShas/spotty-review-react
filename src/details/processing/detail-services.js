import axios from 'axios';
import qs from 'qs';

const DETAILS_API = 'https://api.spotify.com/v1/albums';

const clientId = "9656c9afef2849d88c59827fe08da3bd"; // Your client id
const clientSecret = "9ce25593c5d64093b9d287f928642d47"; // Your secret

// This code, used to get an authorization token from spotify, is based on the code available here:
//  https://gist.github.com/donstefani/70ef1069d4eab7f2339359526563aab2
export const getAuth = async () => {

    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: clientId,
            password: clientSecret,
        },
    };
    const data = {
        grant_type: 'client_credentials',
    };

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            qs.stringify(data),
            headers
        );
        return response.data.access_token;
    } catch (error) {
        console.log(error);
    }
};

export const findDetails = async (album_id) => {
    const access_token = await getAuth();

    const response = await axios.get(`${DETAILS_API}/${album_id}`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    });
    const info = response.data;
    const albumData = {
        "_id": info.uri.split(":")[2],
        "name": info.name,
        "img": info.images[0].url,
        "total_tracks": info.total_tracks,
        "release_date": info.release_date,
        "artist": info.artists[0].name, // We are making an assumption here that the album info will include artists,
                                        // which isnt guaranteed
        "link": info.external_urls.spotify
    }
    return albumData;
}