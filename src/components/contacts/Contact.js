import React from 'react';
import Avatar from 'react-avatar';


const Contact = ({ contact }) => {
    let {name, email, phone } = contact;

    return (
        <tr>
            <th scope="row">
                <input className="form-check-input" type="checkbox" value="" />
            </th>
            <td><Avatar className="mr-2" name={name} size="40" rounded={true} />{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <i className="fa fa-pencil mr-3"></i>
                <i className="fa fa-trash"></i>
            </td>
        </tr>
    )
}

export default Contact
