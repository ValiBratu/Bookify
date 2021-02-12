import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

import image1 from '/Users/Bogdan/source/repos/SimpleBooking/BookingReact/ClientApp/src/assets/img/barber.jpg';
import image2 from '/Users/Bogdan/source/repos/SimpleBooking/BookingReact/ClientApp/src/assets/img/beauty.jpg';
import image3 from '/Users/Bogdan/source/repos/SimpleBooking/BookingReact/ClientApp/src/assets/img/fitness.jpg';



function Categories() {
    const categoriesApi = "https://localhost:44345/api/categories/";
    const [categoryList, setCategoryList] = useState([]);

    const categoryIdRoute = "/categories/";

    useEffect(() => {

        fetch(categoriesApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategoryList(data);

            })
            .catch(err=>console.log(err))

    }, []);
    return (
        <div className="login-page sidebar-collapse">
        <div>
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
            </div>
            <div className="main main-raised">
                <div className="container">
                    <div className="section text-center">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto">
                                <h2 className="title">Our Services</h2>
                                <h5 className="description">Sort description.</h5>
                            </div>
                        </div>
                        <div className="features">
                            <div className="row">
                                <div className="col-md-4 ">
                                        <Link to="/Categories/1">
                                            <img className="img-fluid image" src={image1} />
                                            <h4 className="top-left">Barber Shops</h4>
                                        </Link>
                                </div>
                                    <div className="col-md-4 ">
                                        <Link to="/BeautySallons">
                                            <img className="img-fluid image" src={image2} />
                                            <h4 className="centered">Beauty & Wellness</h4>
                                        </Link>
                                </div>
                                    <div className="col-md-4 ">
                                        <Link to="/Gyms">
                                            <img className="img-fluid image" src={image3} />
                                            <h4 className="top-right">Sports & Fitness</h4>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="section section-contacts">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto">
                                <h2 className="text-center title">Write us a message</h2>
                                <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                                <form className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Your Name</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Your Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleMessage" className="bmd-label-floating">Your Message</label>
                                        <textarea type="email" className="form-control" rows={4} id="exampleMessage" defaultValue={""} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 ml-auto mr-auto text-center">
                                            <button className="btn btn-primary btn-raised">
                                                Send Message
                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        );
}
export default Categories;

