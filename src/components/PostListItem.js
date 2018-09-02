import React, { Component } from 'react';

export default class PostListItem extends Component {
    render() {
        return (
            <li>
                <div className="list__item item">
                    <strong className="item__title">{this.props.title}</strong>
                    <p className="item__body" dangerouslySetInnerHTML={{__html: this.props.body}} />
                </div>
            </li>
        )
    }
}
