import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { Header } from './components';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Posts from './pages/Posts.js';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;
