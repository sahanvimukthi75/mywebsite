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
                    <Link to="/home" className="navLink">Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/gallery" className="navLink">Gallery</Link>
                </li>
                <li className="navItem">
                    <Link to="/about" className="navLink">About</Link>
                </li>
                <li className="navItem">
                    <Link to="/contact" className="navLink">Contact</Link>
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
