import React from 'react';
import { useState } from 'react';

const AddContact = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");

    const submitForm = () => {
        console.log(name, email, phone);
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