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
        
    }
}