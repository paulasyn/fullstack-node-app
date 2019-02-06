// Register.js

import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleClick(event) {
        var apiBaseUrl = 'http://localhost:4000/users/';

        console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);

        // TODO: check for empty values before submitting.

        var self = this;
        var payload = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email,
            password : this.state.password,
        }

        axios.post(apiBaseUrl+'register', payload)
            .then(function(res) {
                console.log(res);
                if (Response.data.code === 200){
                    // console.log("Registration Successful");
                    var loginscreen = [];
                    loginscreen.push(<Login parentContext={this}/>);
                    var loginmessage = "Not Registered yet. Go to registration.";
                    self.props.parentCOntext.setState({loginscreen: loginscreen, loginmessage: loginmessage,
                    buttonLabel: "Register", isLogin: true});
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="inputEmail">First Name</label>
                        <input class="form-control" 
                               id="firstName"
                               onChange = {(event, newValue) => this.setState({first_name: newValue})} 
                               placeholder="Enter First Name"></input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" 
                               id="lastName"
                               onChange = {(event, newValue) => this.setState({last_name: newValue})} 
                               placeholder="Enter Last Name"></input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" 
                               id="email"
                               type="email"
                               onChange = {(event, newValue) => this.setState({email: newValue})} 
                               placeholder="Enter Email"></input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" 
                               id="password"
                               type="password"
                               onChange = {(event, newValue) => this.setState({password: newValue})} 
                               placeholder="Enter Password"></input>
                    </div>

                    <button type="submit"
                            label="Submit"
                            onCLick={(event) => this.handleClick(event)} 
                            class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
const style= {
    margin: 15,
};

export default Register;