import React, { Component } from 'react';
import Axios from 'axios';

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: []
        };
    }

    componentDidMount() {
        let self = this;

        Axios.get(this.props.source).then(function(res) {
            if (200 === res.status) {
                let listItems = res.data.map(function(item) {
                    return (
                        <li>
                            <div className="list__item item">
                                <strong className="item__title">{item.title}</strong>
                                <p className="item__body" dangerouslySetInnerHTML={{__html: item.body}} />
                            </div>
                        </li>
                    )
                });

                self.setState({listItems: listItems});
            }
        }).catch(function(err) {
            console.error(err);
        });
    }
  
    render() {
        return (
            <ul className="posts__list list">
                {this.state.listItems}
            </ul>
        )
    }
}
