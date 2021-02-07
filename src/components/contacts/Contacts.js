import React from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const Contacts = () => {
    const contacts = useSelector(state => state.contacts);
    // console.log(contacts)
    return (
        <div className="container py-5">
            <Link to="/contacts/add" className="btn btn-primary pull-right mb-3">
                Add Contact
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <input className="form-check-input" type="checkbox" value="" />
                        </th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => <Contact key={contact.id} contact={contact} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
