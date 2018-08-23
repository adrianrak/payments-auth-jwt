import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import ApiService from '../../service/api.service';
import DropIn from "braintree-web-drop-in-react";

export default class UserPanel extends Component {
    render() {
		return (
			<div style={{ textAlign: "center" }}>
				<DropIn
					options={{
						authorization:
						'sandbox_25zg57sb_mhjjzn94dhchd3zh'
					}}
				/>
				<button>Buy Now!</button>
			</div>
		);
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