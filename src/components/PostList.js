import React from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';

function PostList({ posts }) {
    if (!posts.length) {
        return (
            <div>
                No Posts
            </div>
        )
    }
    return (
        <ul className="posts__list list">
            {posts.map(post => {
                return (
                    <PostListItem title={post.title} body={post.body} />
                );
            })}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps
)(PostList);
