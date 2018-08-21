import React, {Component} from 'react';
import ApiService from '../../service/api.service';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {

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
                    <button type="submit" className="btn btn-secondary">Log In</button>
                </div>
            </form>
        );
    }
}