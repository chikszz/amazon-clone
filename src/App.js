import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
    return (
        //BEN
        <Router>
            <div className="app">
                <Header />
                    <Switch>
                    <Route path="/Login">
                            <Login />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
            </div>
        </Router>
    );
}

export default App;