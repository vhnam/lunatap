import React, { Component } from 'react';
import Axios from 'axios';

import PostListItem from './PostListItem';

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let self = this;

        Axios.get(this.props.source).then(function(res) {
            if (200 === res.status) {              
                self.setState({posts: res.data});
            }
        }).catch(function(err) {
            console.error(err);
        });
    }

    render() {
        let listItems = this.state.posts.map(function(item) {
            return (
                <PostListItem title={item.title} body={item.body} />
            )
        });

        return (
            <ul className="posts__list list">
                {listItems}
            </ul>
        )
    }
}
