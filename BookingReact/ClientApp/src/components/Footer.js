import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

function Footer() {

    const footerStyle = {
        position: "absolute",
        bottom: "0",
        width: "644px",
        height: "20px",
        margin: "0 auto",
        background: "light-blue"
    };


    return (
        <footer style={ footerStyle }>
            <div className="container">
               
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Register your bussiness</a>
                </div>

 
        </footer>

    );

}

export default Footer;