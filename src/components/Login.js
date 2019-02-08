//Login.js

import React, {Component} from 'react';
import './uploadScreen';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:4000/users/";
        var self = this;
        var payload = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) { 
                console.log(response);

                if(response.data.code === 200){
                    console.log("Login Successful!");
                }
                else if(response.data.code === 204){
                    console.log("Email and Password do not match");
                    alert("Email and Password do not match");
                }
                else{
                    console.log("Email does not exist");
                    alert("Email does not exist");
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input type="email" 
                               class="form-control" 
                               id="inputEmail"
                               onChange = {(event, newValue) => this.setState({email: newValue})} 
                               aria-describedby="emailHelp" 
                               placeholder="Enter Email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="inputPassword" 
                               class="form-control" 
                               onChange= {(event, newValue) => this.setState({password: newValue})}
                               id="inputPassword" 
                               placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="rememberCheck"></input>
                        <label class="form-check-label" for="rememberCheck">Remember Me</label>
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
export default Login;