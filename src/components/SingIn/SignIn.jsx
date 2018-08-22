import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import ApiService from '../../service/api.service';
import {Link} from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            background: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userLoginData = {
            email: this.state.email,
            password: this.state.password
        };

        ApiService.signInUser(userLoginData)
            .then((response) => {
                toast.success("You have login into the account successfully!", {
                    position: toast.POSITION.TOP_CENTER
                });
                this.setState({
                    background: '#37b137'
                });
                console.log(response);
            }).catch(() => {
            toast.error('problem error', {
                position: toast.POSITION.TOP_LEFT
            });
            this.setState({
                background: 'red'
            })
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <form className="form-center">
                <div className="form-group">
                    <ToastContainer className="toast-view" style={{backgroundColor: this.state.background}}
                                    autoClose={1000}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email"
                           onChange={event => this.handleChange(event)}
                           aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="text-center mt-3">
                    <button type="submit" className="btn btn-secondary"
                            onClick={event => this.handleSubmit(event)}>
                        <Link to="/userpanel">
                            Log In
                        </Link>
                    </button>
                </div>
            </form>
        );
    }
}