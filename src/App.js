import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Index from './views/Index';
import Login from './views/Login';

import './vendor/tailwind.css';
import "animate.css/animate.min.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
