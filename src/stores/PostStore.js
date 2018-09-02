import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _posts = [];
let _post = {};

function setPosts(posts) {
    _posts = posts;
}

function setPost(post) {
    _post = post;
}

class PostStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getPosts() {
        return _posts;
    }

    getPost() {
        return _post;
    }
}

const postStore = new PostStore();

postStore.dispatchToken = AppDispatcher.register((function(action) {
    switch(action.actionType) {
        case PostConstants.RECIEVE_POST:
            setPost(action.post);
            postStore.emitChange();
            break;
        case PostConstants.RECIEVE_POSTS:
            setPosts(action.posts);
            postStore.emitChange();
            break;
        case PostConstants.RECIEVE_POST_ERROR:
            alert(action.message);
            postStore.emitChange();
            break;
        case PostConstants.RECIEVE_POSTS_ERROR:
            alert(action.message);
            postStore.emitChange();
            break;
        default:
    }
}));

export default postStore;
