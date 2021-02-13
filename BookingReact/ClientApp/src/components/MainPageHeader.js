import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Header from './MainPageHeader';

function HeaderMainPage() {




    return (
        <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: 'url("../assets/img/city_profile.jpg")' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title">Your Story Starts With Us.</h1>
                        <h4>Online Booking System for all service based industries.</h4>
                        <br />
                        <Link to="/Register">
                            <div target="_blank" className="btn btn-danger btn-raised btn-lg">
                                <i className="fa fa-play" /> Register
                </div>
                        </Link>
                    </div>
                </div>

            </div>
            {/* A JSX comment */}
        </div>

    );

}

export default HeaderMainPage;