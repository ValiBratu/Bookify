import React from 'react';



function NavBar() {

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Bookify</a>

            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Login</button>
        </nav>
    );
}

export default NavBar;