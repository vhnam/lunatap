import './../assets/css/home.css';

import React, { Component } from 'react'; 

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="jumbotron">
                                <h1 className="display-5">Where life happens</h1>
                                <p className="lead">Connecting people</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img class="home__hero-image" src={require('./../assets/img/hang-out.png')} alt="Lunatap" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
