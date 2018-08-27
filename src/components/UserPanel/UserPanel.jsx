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
        // Get a client token for authorization from your server
        // const response = fetch("checkout/client_token");
        // const clientToken = response.json(); // If returned as JSON string

        this.setState({
            clientToken: 'sandbox_25zg57sb_mhjjzn94dhchd3zh'
        });
    }

    buy = () => {
        // Send the nonce to your server
        const { nonce } = this.instance.requestPaymentMethod();
        fetch(`/checkout/${nonce}`);
    }

    render() {
        if (!this.state.clientToken) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <DropIn
                        options={{ authorization: this.state.clientToken }}
                        onInstance={instance => (this.instance = instance)}
                    />
                    <button onClick={() => this.buy()}>Buy</button>
                </div>
            );
        }
        // <div style={{ textAlign: "center" }}>

        // 	<DropIn
        // 		options={{
        // 			authorization:
        // 			'sandbox_25zg57sb_mhjjzn94dhchd3zh'
        // 		}}
        // 	/>
        // 	<button>Buy Now!</button>
        // </div>
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // };

    // render() {
    //     return (
    //         <div style={{background:'transparent'}}>
    //             <p>Hello User</p>
    //         </div>
    //     );
    // }
}