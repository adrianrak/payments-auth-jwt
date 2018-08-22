import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import ApiService from '../../service/api.service';

export default class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div style={{background:'transparent'}}>
                <p>Hello User</p>
            </div>
        );
    }
}