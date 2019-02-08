// Loginscree.js

import React, { Component } from 'react';
import axios from 'axios';

import Login from './Login';
import Register from './Register';

class Loginscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Register',
            isLogin: true

        }
    }

    componentWillMount() {
        var loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContex={this.props.parentContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen, loginmessage: loginmessage})
        }
    
    handleClick(event) {
        // console.log("event", event);
        var loginmessage;
        if(this.state.isLogin){
            var loginscreen = [];
            loginscreen.push(<Register parentContext={this}/>);
            loginmessage = "ALready registered. Go to Login";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Login",
                isLogin: false
            })

        }
        else{
            var loginscreen = [];
            loginscreen.push(<Login parentContext={this}/>);
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
            })
        }
    }
    
        render() {
            return (
                <div className="loginscreen">
                    {this.state.loginscreen}
                    <div>
                        <button 
                            type="submit" 
                            label="submit" 
                            onClick={(event) => this.handleClick(event)}
                            class="btn btn-primary">Login
                        </button>
                    </div>
                </div>
            );
        }
    };
export default Loginscreen;