import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Header from './MainPageHeader';

function ReviewsComponent() {




    return (
        <div className="section text-center">
            <h2 className="title">Popular Reviews</h2>
            <div className="team">
                <div className="row">
                    <div className="col-md-4">
                        <div className="team-player">
                            <div className="card card-plain">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <img src="../assets/img/faces/avatar.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                                </div>
                                <h4 className="card-title">Gigi Hadid
                          <br />
                                    <small className="card-description text-muted">Model</small>
                                </h4>
                                <div className="card-body">
                                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram" /></a>
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-player">
                            <div className="card card-plain">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <img src="../assets/img/faces/christian.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                                </div>
                                <h4 className="card-title">Christian Louboutin
                          <br />
                                    <small className="card-description text-muted">Designer</small>
                                </h4>
                                <div className="card-body">
                                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-player">
                            <div className="card card-plain">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <img src="../assets/img/faces/kendall.jpg" alt="Thumbnail Image" className="img-raised rounded-circle img-fluid" />
                                </div>
                                <h4 className="card-title">Kendall Jenner
                          <br />
                                    <small className="card-description text-muted">Model</small>
                                </h4>
                                <div className="card-body">
                                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram" /></a>
                                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default ReviewsComponent;