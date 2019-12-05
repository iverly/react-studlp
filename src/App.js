import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Index from './views/Index'
import Header from './components/Header'

import './vendor/tailwind.css'

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
