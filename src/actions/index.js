import { FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/posts';

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};