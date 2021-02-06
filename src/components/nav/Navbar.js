import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Basic CRUD using Redux</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
