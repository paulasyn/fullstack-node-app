// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-expressions
<Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

class TableRow extends Component {
    render(){ 
        return(
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>

                <td>
                    {this.props.obj.business_name}
                </td>

                <td>
                    {this.props.obj.business_gst_number}
                </td>
                
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>

                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default TableRow;