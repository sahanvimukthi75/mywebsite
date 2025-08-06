import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link to="/homea" className="navLink">Add</Link>
                </li>
                <li className="navItem">
                    <Link to="/details" className="navLink">Details</Link>
                </li>
                
                <li className="navItem">
                    <button onClick={handleLogout} className="logoutButton">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
