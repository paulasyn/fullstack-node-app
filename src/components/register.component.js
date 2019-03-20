import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePassword2(e) {
        this.setState({
            password2: e.target.value
        });
    }

    onSubmit(e) { // TODO: figure out why the if statement doesn't work
        if (this.state.password === this.state.password2){
            console.log("Submitting request to DB");
            console.log("person name: " + this.state.name);
            e.preventDefault();
            const obj = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                dateAdded: new Date().toLocaleString()
            };
            axios.post('http://localhost:4000/users/add', obj).then(res => console.log(res.data));
        }
        else{
            console.log("Passwords Don't Match.")
        }

        this.setState({
            name: '',
            email: '',
            password: '',
            password2: ''
        })
    }

    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                            type="email" 
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                            type="password" 
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Verify Password: </label>
                        <input 
                            type="password" 
                            className="form-control"
                            value={this.state.password2}
                            onChange={this.onChangePassword2}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Register Account" 
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}