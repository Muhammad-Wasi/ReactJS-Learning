
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "../Home";
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';

export default function HomeRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/home/homeone">
                    <HomeOne />
                </Route>
                <Route exact path="/home/hometwo">
                    <HomeTwo />
                </Route>
            </Switch>
        </Router>
    );
}