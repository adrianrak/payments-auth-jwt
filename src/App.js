import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch, HashRouter} from 'react-router-dom';
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="container mt-4">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/signin' component={SignIn}/>
                            <Route exact path='/signup' component={SignUp}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}