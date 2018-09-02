import Axios from 'axios';

import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';

export default {
    recievePosts: function() {
        Axios.get('http://localhost:3000/posts').then(function(res) {
            if (200 === res.status) {
                AppDispatcher.dispatch({
                    actionType: PostConstants.RECIEVE_POSTS,
                    posts: res.data
                });
            }
        }).catch(function(err) {
            AppDispatcher.dispatch({
                actionType: PostConstants.RECIEVE_POSTS_ERROR,
                posts: err
            });
        });
    },

    getPost: function(id) {
        Axios.get(`http://localhost:3000/posts/${id}`).then(function(res) {
            if (200 === res.status) {
                AppDispatcher.dispatch({
                    actionType: PostConstants.RECIEVE_POST,
                    posts: res.data
                });
            }
        }).catch(function(err) {
            AppDispatcher.dispatch({
                actionType: PostConstants.RECIEVE_POST_ERROR,
                posts: err
            });
        });
    }
}
