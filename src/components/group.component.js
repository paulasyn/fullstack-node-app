import React, { Component } from 'react';
import Select from 'react-select'
import axios from 'axios';

export default class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onChangPerson1Name = this.onChangPerson1Name.bind(this);
        this.onChangPerson2Name = this.onChangPerson2Name.bind(this);
        this.onChangPerson1ID = this.onChangPerson1ID.bind(this);
        this.onChangPerson2ID = this.onChangPerson2ID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            group_name: '',
            person1_name: '',
            person2_name: '',
            person1_ID: '',
            person2_ID: '',
            usersList: [],
            user:'',
            users: []
        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:4000/users/');
            console.log('👉 Returned data:', res.data);
            this.setState({users: res.data})

        } catch (e){
            console.log('error ${e}');
        }

    }   


    onChangeGroupName(e) {
        this.setState({
            group_name: e.target.value
        });
    }
    onChangPerson1Name(e) {
        this.setState({
            person1_name: e.target.value
        });
    }

    onChangPerson2Name(e) {
        this.setState({
            person2_name: e.target.value
        });
    }

    onChangPerson1ID(e) {
        this.setState({
            person1_ID: e.target.value
        });
    }

    onChangPerson2ID(e) {
        this.setState({
            person2_ID: e.target.value
        });
    }

    onSubmit(e) {
        console.log("Submitting request to DB");
        console.log("Group name: " + this.state.group_name);
        console.log("Names are" + this.state.usersList);
        e.preventDefault();
        const obj = {
            group_name: this.state.group_name,
            person1_name: this.state.person1_name,
            person2_name: this.state.person2_name,
            person1_ID: this.state.person1_ID,
            person2_ID: this.state.person2_ID
        }; 
        axios.post('http://localhost:4000/groups/add', obj).then(res => console.log(res.data));

        this.setState({
            group_name: '',
            person1_name: '',
            person2_name: '',
            person1_ID: '',
            person2_ID: ''
        })
    }

    render() {

        return (
            <div style={{marginTop:10}}>
                <h3>Create New Group</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Group Name: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.group_name}
                            onChange={this.onChangeGroupName}
                        />
                    </div>

                    <label>Choose User in Group: </label>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            {/* insert dropdown here */}
                                
                            <div className="col-md-4"></div>
                            </div>
                        </div>
                    {/* <div className="form-group">
                        <label>Add Person 1 Name: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.person1_name}
                            onChange={this.onChangPerson1Name}
                        />
                    <div className="form-group">
                        <label>Add Person 2 Name: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.person2_name}
                            onChange={this.onChangPerson2Name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Person 1 I: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.business_gst_number}
                            onChange={this.onChangeGstNumber}
                        />
                    </div> */}
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Create Group" 
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

// Create Group Drowpdown selector