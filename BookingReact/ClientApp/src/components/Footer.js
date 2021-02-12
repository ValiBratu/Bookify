import React, { useState, useEffect } from 'react';


function Footer() {

    const styleForFooter = {

        background: "#0ea0ff",
        position: "absolute",
        left: "0px",
        bottom: "0px",
        height: "250px",
        overflow: "hidden",
        width: "100%"
    }



    return (
        <footer className="footer footer-default">
            <div className="container">
                <nav className="float-left">
                    <ul>
                        <li>
                            <a href="">
                                Simple Booking
            </a>
                        </li>
                        <li>
                            <a href="">
                                About Us
            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
            </a>
                        </li>
                        <li>
                            <a href="">
                                Licenses
            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>

    );

}

export default Footer;