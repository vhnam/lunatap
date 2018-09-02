import './../assets/css/posts.css';

import React, { Component } from 'react';

import PostList from '../components/PostList';

export default class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-5">Lunatap brings all your communication together</h1>
                        <p className="lead">
                            Teamwork in Lunatap happens in channels — a single place for messaging, tools and files — helping everyone save time and collaborate together.
                        </p>
                    </div>
                    <h2 className="heading">Lastest News</h2>
                    <PostList source="http://localhost:3000/posts" />
                </div>
            </div>
        )
    }
}