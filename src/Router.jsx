// import React from "react";
// import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
// import AuthForm from "./classes/Auth";
// import AuthTodo from "./classes/AuthTodo";

// export default function ScreenRouter() {
//     return (
//         <Router>
//             <Switch>
//                 {/* <Route exact path="/home">
//                     <Home />
//                 </Route> */}
//                 <Route path="/">
//                     <AuthForm />
//                 </Route>
//                 <Route path="/todo">
//                     <AuthTodo />
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }


import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import About from "./classes/nestedRouterScreens/About";
import Contact from "./classes/nestedRouterScreens/Contact";
import Home from "./classes/nestedRouterScreens/Home";
import HomeRouter from "./classes/nestedRouterScreens/Home/HomeRouter";

export default function ScreenRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <HomeRouter />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}