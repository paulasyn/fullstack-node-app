import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onGetDate = this.onGetDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            name: '',
            email: '',
            password: '',
            dateAdded: ''
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

    onGetDate(e) {
        this.setState({
            dateAdded: new Date()
        });
    }

    onSubmit(e) {
        console.log("Submitting request to DB");
        console.log("person name: " + this.state.name);
        e.preventDefault();
        const obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            dateAdded: this.state.dateAdded
        }; 
        axios.post('http://localhost:4000/users/add', obj).then(res => console.log(res.data));

        this.setState = ({
            name: '',
            email: '',
            password: '',
            dateAdded: ''
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