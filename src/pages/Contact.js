import './../assets/css/contact.css';

import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-5 text-center">Contact us</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="contact__hero-image" src={require('../assets/img/section.png')} alt="Lunatap" />
                        </div>
                        <div className="col-md-6">
                            <form action="http://localhost:3000/posts" method="post" className="contact__form">
                                <div className="form-group">
                                    <label for="contact-title">Title</label>
                                    <input className="form-control" type="input" name="title" placeholder="Enter title" id="contact-title" />
                                </div>
                                <div className="form-group">
                                    <label for="contact-body">Body</label>
                                    <textarea className="form-control"row="50" name="body" placeholder="Enter body" id="contact-body" />
                                </div>
                                <input type="hidden" name="userId" value="11" />
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
