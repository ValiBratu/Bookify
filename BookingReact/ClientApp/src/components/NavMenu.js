import React from 'react';
import './material-kit.css'
import { Link } from 'react-router-dom';
import { useGlobalUser } from './utils/AuthContext';
function NavMenu() {
    let [anchorEl, setAnchorEl] = React.useState(null);

    let handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user, logout } = useGlobalUser();





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

            <div className="profile-page sidebar-collapse">
        <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                            <Link to="/">
                            <div className="navbar-brand">
                                    <strong>Simple Booking</strong></div></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div className="collapse navbar-collapse">

                            {user.Auth ? (
                                <ul className="navbar-nav ml-auto" style={{ height:"40px" }}>
                                    <li className="nav-item">
                                      <h4>
                                        <div className="navbar-brand">
                                            <strong style={{ color: "purple" }}>{user.Name}</strong>
                                            </div>
                                        </h4>
                                    </li>

                                    <li className="nav-item">
                                        <button type="button"  className="btn btn-primary btn-link btn-wd btn-lg" onClick={logout}>
                                        <div className="nav-link" target="blank">
                                            <i className="material-icons"></i> Log out
                                        </div>
                                       </button>
                                    </li>
                                </ul>

                            ): (
                                   
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                    <Link to="/Login">
                                        <div className="nav-link" target="blank">
                                            <i className="material-icons">unarchive</i> Log in
                                            </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Register">
                                        <div className="nav-link" target="blank">
                                            <i className="material-icons">unarchive</i> Register
                                            </div>
                             </Link>
                                </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank" data-original-title="Follow us on Twitter" rel="nofollow">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank" data-original-title="Like us on Facebook" rel="nofollow">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="" target="_blank" data-original-title="Follow us on Instagram" rel="nofollow">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                                    </ul>
                                )}
                </div>
            </div>
                </nav>
            </div>
        </div>
    );


}


export default NavMenu;