import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ApiService from '../../service/api.service';
import DropIn from "braintree-web-drop-in-react";

export default class UserPanel extends Component {
    instance;

    state = {
        clientToken: null
    };

    componentDidMount = () => {
        //TODO
        // Get a client token for authorization from your server
        // const response = fetch("server.test/client_token");
        // const clientToken = response.json(); // If returned as JSON string

        this.setState({
            clientToken: 'sandbox_25zg57sb_mhjjzn94dhchd3zh'
        });
    };

    buy = () => {
        // Send the nonce to your server
        const {nonce} = this.instance.requestPaymentMethod();
        fetch(`/checkout/${nonce}`);
    };

    render() {
        if (!this.state.clientToken) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div style={{ textAlign: "center" }}>
                    <DropIn
                        options={{authorization: this.state.clientToken}}
                        onInstance={instance => (this.instance = instance)}
                    />
                    <button onClick={() => this.buy()}>Buy</button>
                </div>
            );
        }
    }
}