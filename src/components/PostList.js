import React, { Component } from 'react';

import PostActions from './../actions/PostActions';
import PostStore from './../stores/PostStore';

function getPostListItem(post) {
    return (
        <li>
            <div className="list__item item">
                <strong className="item__title">{post.title}</strong>
                <p className="item__body" dangerouslySetInnerHTML={{__html: post.body}} />
            </div>
        </li>
    )
}

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        PostStore.addChangeListener(this.onChange);
    }

    componentDidMount() {
        PostActions.recievePosts();
    }

    componentWillUnmount() {
        PostStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            posts: PostStore.getPosts()
        });
    }

    render() {
        let postListItems;

        if (this.state.posts) {
            postListItems = this.state.posts.map(post => getPostListItem(post));
        }
        
        return (
            <ul className="posts__list list">
                {postListItems}
            </ul>
        )
    }
}
