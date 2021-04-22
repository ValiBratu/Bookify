import React from 'react';
import './material-kit.css'
import { useGlobalUser } from './utils/AuthContext';

function Login() {
    let [anchorEl, setAnchorEl] = React.useState(null);

    let handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { user, login } = useGlobalUser();

    const getInputValues = () => {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        loginFunction(email, password);

    }

    const loginFunction = (email, password) => {

        const loginApiRoute = "https://localhost:44345/api/Authenticate/login";

        const sentData = {
            Email: email,
            Password: password
        }

        fetch(loginApiRoute, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => response.json())
            .then(data => {

                if (data.token) {

                    parseJwt(data.token);
                }
                

            })
            .catch(error => {
                console.log(error)
            })
        

    }


    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

       
        console.log(JSON.parse(jsonPayload));

        const userData = {
            Id: JSON.parse(jsonPayload).id,
            Name: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            Email: JSON.parse(jsonPayload)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            Role: JSON.parse(jsonPayload)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        };

        login(userData);
        
    };

        return (
            <div>
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
                                            <h4 className="card-title">Login</h4>
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
                                                        <i className="material-icons">mail</i>
                                                    </span>
                                                </div>
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email..." />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                                <input type="password" name="password" id="password" className="form-control" placeholder="Password..." />
                                            </div>
                                        </div>
                                        <div className="footer text-center">
                                            <button type="button" href="" className="btn btn-primary btn-link btn-wd btn-lg" onClick={getInputValues}>Login</button>
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

export default Login;