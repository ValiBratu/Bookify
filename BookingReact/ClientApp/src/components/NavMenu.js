import React from 'react';
import './NavMenu.css';

function NavMenu() {
    let [anchorEl, setAnchorEl] = React.useState(null);

    let handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white booking-navbar gradient">
        <div className="container">
            <a className="navbar-brand logo">Bookify</a>

                <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" hreft="textblabla">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" hreft="textblabla">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" hreft="textblabla">Register</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}


export default NavMenu;