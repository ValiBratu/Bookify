﻿import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./RegisterPageCSS.css"

const RegisterPage = (props) => {


    const [userInfo, setUserInfo] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Password: "",
        ConfirmPass: ""
    });

    const allInputsAreComplete = (event) => {

    };


   const getInputValues = (event) => {



       if (userInfo.Password != userInfo.ConfirmPass) {
           alert("no");
           return;
       }

       console.log("Firstname "+userInfo.FirstName);
       console.log("Lastname " +userInfo.LastName);
       console.log("Email " +userInfo.Email);
       console.log("Phone " +userInfo.Phone);
       console.log("Pass " +userInfo.Password);
       console.log("ConfirmPass " + userInfo.ConfirmPass);

    };

    const handleInput = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
        console.log(userInfo.FirstName);

    };

    //const addUserToDb = () => {



    //};


    return (


        <div>
            <br></br>
            <br></br>
            <br></br>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
                Material Kit by Creative Tim
        </title>
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
        {/*     Fonts and icons     */}
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        {/* CSS Files */}
        <link href="../assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />
        {/* CSS Just for demo purpose, don't include it in your project */}
        <link href="../assets/demo/demo.css" rel="stylesheet" />


                <div className="page-header header-filter" style={{ backgroundImage: 'url("../assets/img/bg7.jpg")', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                                <div className="card card-login">
                                    <form className="form" method="POST" action="#">
                                        <div className="card-header card-header-primary text-center">
                                            <h4 className="card-title">Register</h4>
                                            <div className="social-line">
                                                <a href="#pablo" className="btn btn-just-icon btn-link">
                                                    <i className="fa fa-facebook-square" />
                                                </a>
                                                <a href="#pablo" className="btn btn-just-icon btn-link">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#pablo" className="btn btn-just-icon btn-link">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </div>
                                        </div>
                                        <p className="description text-center">Or Be Classical</p>
                                        <div className="card-body">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">face</i>
                                                    </span>
                                                </div>
                                            <input type="text" className="form-control" placeholder="First Name..." name="FirstName" id="FirstName" onChange={handleInput} />
                                            </div>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">face</i>
                                                    </span>
                                                </div>
                                            <input type="text" className="form-control" placeholder="Last Name..." name="LastName" id="LastName" onChange={handleInput} />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">mail</i>
                                                    </span>
                                                </div>
                                            <input type="email" className="form-control" placeholder="Email..." name="Email" id="Email" onChange={handleInput} />
                                            </div>
                                        <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">phone</i>
                                                    </span>
                                                </div>
                                            <input type="tel" className="form-control" placeholder="Phone number..." name="Phone" id="Phone" onChange={handleInput} />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                            <input type="password" className="form-control" placeholder="Password..." name="Password" id="Password" onChange={handleInput} />
                                            </div>

                                    <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                            <input type="password" className="form-control" placeholder="Confirm Password..." name="ConfirmPass" id="ConfirmPass" onChange={handleInput} />
                                            </div>
                                        </div>
                                    <div className="footer text-center">
                                        <button type="button" href="" className="btn btn-primary btn-link btn-wd btn-lg" onClick={getInputValues}>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>



    );
}
export default RegisterPage;