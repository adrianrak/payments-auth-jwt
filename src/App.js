import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch, HashRouter} from 'react-router-dom';
import SignIn from "./components/SingIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import UserPanel from "./components/UserPanel/UserPanel";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <div className="container mt-4">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/signin' component={SignIn}/>
                            <Route path='/signup' component={SignUp}/>
                            <Route path="/userpanel" component={UserPanel}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}