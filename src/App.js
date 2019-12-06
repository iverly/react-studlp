import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Index from './views/Index';
import Login from './views/Login';
import Register from './views/Register';
import Sante from './views/Sante';
import Logement from './views/Logement';
import Alimentation from './views/Alimentation';
import Finance from './views/Finance';

import './vendor/tailwind.css';
import "animate.css/animate.min.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/sante">
                    <Sante />
                </Route>
                <Route exact path="/logement">
                    <Logement />
                </Route>
                <Route exact path="/alimentation">
                    <Alimentation />
                </Route>
                <Route exact path="/finance">
                    <Finance />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
