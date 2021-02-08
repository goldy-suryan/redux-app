import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';


const Contact = ({ contact }) => {
    let {id, name, email, phone } = contact;

    return (
        <tr>
            <th scope="row">
                <input className="form-check-input" type="checkbox" value="" />
            </th>
            <td><Avatar className="mr-2" name={name} size="40" rounded={true} />{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <Link to={`contacts/edit/${id}`} ><i className="fa fa-pencil mr-3"></i></Link>
                <i className="fa fa-trash text-danger"></i>
            </td>
        </tr>
    )
}

export default Contact
