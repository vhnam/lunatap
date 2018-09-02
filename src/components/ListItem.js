import React, { Component } from 'react';

export default class ListItem extends Component {
    componentDidMount() {
        console.log(this.props.title);
        console.log(this.props.body);
    }
    render() {
        return (
            <li>
                <div className="list__item item">
                    <strong className="item__title">{this.props.title}</strong>
                    <p className="item__body">{this.props.body}</p>
                </div>
            </li>
        )
    }
}
