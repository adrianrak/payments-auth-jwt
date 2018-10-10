import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <span className="navbar-brand">JWT</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: "flex-end" }}>
                    <ul className="navbar-nav">

                        <Link to="/signin" className="nav-item">
                            <span className="nav-link">Sign In</span>
                        </Link>
                        <Link to="/signup" className="nav-item">
                            <span className="nav-link">Sign Up</span>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}