import './../assets/css/about.css';

import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="jumbotron col-md-8 offset-2">
                            <h1 className="display-5">Making work simpler, more pleasant, and more productive</h1>
                            <p className="lead">Lunatap is the collaboration hub that brings the right people together with all the right information and tools to get work done. Launched in 2014, Lunatap is the fastest-growing business application in history. Millions of people around the world use Lunatap to connect their teams, unify their systems, and drive their business forward. From Fortune 100 companies to corner markets, Lunatap helps people communicate better.</p>
                        </div>
                    </div>
                </div>
                <div className="about__hero">
                    <img className="hero__image" src={require('../assets/img/hero.png')} alt="Lunatap" />
                </div>
            </div>
        )
    }
}