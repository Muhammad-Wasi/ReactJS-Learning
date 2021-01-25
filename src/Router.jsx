import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import AuthForm from "./classes/Auth";
import AuthTodo from "./classes/AuthTodo";

export default function ScreenRouter() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/home">
                    <Home />
                </Route> */}
                <Route path="/">
                    <AuthForm />
                </Route>
                <Route path="/todo">
                    <AuthTodo />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}
