import React from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts);
    // console.log(contacts)
    return (
        <div className="container py-5">
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
                        contacts.map(contact => <Contact contact={contact} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
