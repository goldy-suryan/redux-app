import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../../redux/actions/contact-action';
import shortid from 'shortid';
import { useHistory, useLocation } from 'react-router-dom';

const AddContact = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [pathId, setPathId] = useState("");
    let dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();
    let contacts = useSelector(state => state.contactList.contacts);

    let singleContact = {}


    useEffect(() => {
        setPathId(location.pathname.split('/').pop())
        if(pathId &&  pathId !== 'add') {
            singleContact = contacts.filter(item => item.id === pathId);
            setName(singleContact[0].name);
            setEmail(singleContact[0].email);
            setPhone(singleContact[0].phone);
        }
    }, [pathId])


    const submitForm = () => {
        if(pathId && pathId !== 'add') {
            dispatch(editContact({id: pathId, name, email, phone}));
        } else {
            let id = shortid.generate();
            dispatch(addContact({id, name, email, phone}));
        }
        history.push('/')
    }

    return (
        <div className="container py-5">
            <form className="form">
                <div className="form-group">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" value={name} name="name" placeholder="full name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} name="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" value={phone} name="phone" placeholder="9999999999" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default AddContact