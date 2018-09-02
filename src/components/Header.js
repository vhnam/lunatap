import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component
{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img class="brand-logo" src={require('../assets/img/logo.png')} alt="Lunatap" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                < NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                < NavLink className="nav-link" to="/posts">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                < NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                < NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
