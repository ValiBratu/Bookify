import React from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

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

                <Link className="nav-link" to="/">Bookify</Link>

                <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Sing up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavMenu;