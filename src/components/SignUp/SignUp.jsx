import React, {Component} from 'react';
import ApiService from '../../service/api.service';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repeatedPassword: '',
            postalCode: '',
            cardNumber: '',
            cardExpiryDate: '',
            cardCVV: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            postalCode: this.state.postalCode,
            cardNumber: this.state.cardNumber,
            cardExpiryDate: this.state.cardExpiryDate,
            cardCVV: this.state.cardCVV
        };

        console.log(userData);

        if (this.state.password === this.state.repeatedPassword) {
            ApiService.signUpUser(userData);
            alert('Udalo')
        };
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <form className="form-center" >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name"
                           onChange={event => this.handleChange(event)}
                           aria-describedby="emailHelp" placeholder="Enter Name"/>
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
                <div className="form-group">
                    <label>Repeat password</label>
                    <input type="password" className="form-control" name="repeatedPassword"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Postal code</label>
                    <input type="text" className="form-control" name="postalCode"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Credit card number </label>
                    <input type="text" className="form-control" name="cardNumber"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Expiry date of card</label>
                    <input type="text" className="form-control" name="cardExpiryDate"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" className="form-control" name="cardCVV"
                           onChange={event => this.handleChange(event)}
                           placeholder="Password"/>
                </div>
                <div className="text-center mt-3">
                    <button type="submit" className="btn btn-secondary" onClick={event=>this.handleSubmit(event)}>Create Account</button>
                </div>
            </form>
        );
    }
}