import React, { useState, useEffect } from 'react';


function Footer() {

    const styleForFooter = {
       
        background: "grey",
        position: "absolute",
        left: "0px",
        bottom: "0px",
        height: "250px",
        overflow: "hidden",
        width: "100%"
    }



    return (
        <footer style={styleForFooter} >
           
            <div className="container p-4">
                
                <div className="row">
                    
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
            </p>
        </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Social Media</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Contact</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>
                   
    </div>
                
  </div>

            <div className="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright:
    <a className="text-white" href="/"> C Team</a>
            </div>
           
        </footer>

    );

}

export default Footer;