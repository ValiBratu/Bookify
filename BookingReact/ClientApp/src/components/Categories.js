import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import image1 from '/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/barber.jpg';
import image2 from '/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/beauty.jpg';
import image3 from '/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/fitness.jpg';


function Categories() {
    const categoriesApi = "https://localhost:44345/api/categories/";
    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        fetch(categoriesApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                console.log(categoryList);
            })
            .catch(err => console.log(err))

    }, []);
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <link rel="stylesheet" href="/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/fonts/ionicons.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Late:300,400,700"/>
            </head>
            <body>
        <section className="booking-block block-intro">
            <div className="container">
                    <div className="about-us">
                        <h3>Imagine a picture here</h3>
                        <p>Online Booking System for all service based industries </p>
                    <button className="btn btn-outline-primary" role="button">More About Us</button>
                </div>
            </div>
        </section>
        <section className="booking-block categs">
                <div className="container">
                    <center><h3> Our services </h3></center>
                    <div className="row no-gutters">
                    <div className="col-md-4 item zoom-on-hover">
                                <Link to="/BarberShops">
                                <img className="img-fluid image" src={image1} />
                                <h4 className="top-left">Barber Shops</h4>
                                </Link>
                    </div>
                            <div className="col-md-4 item zoom-on-hover">
                                <Link to="/BeautySallons">
                                <img className="img-fluid image" src={image2} />
                                    <h4 className="centered">Beauty & Wellness</h4>
                                </Link>
                    </div>
                        <div className="col-md-4 item zoom-on-hover">
                            <Link to="/Gyms">
                                <img className="img-fluid image" src={image3} />
                                    <h4 className="top-right">Sports & Fitness</h4>
                                </Link>
                        </div>
                    </div>

                </div>
            </section>
            <section className="booking-block call-to-action border-bottom">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center-content">
                        <h3>Do you want to make in appoinment?</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center-content">
                    <button className="btn btn-outline-primary btn-lg" type="button">Login</button>
                        <button className="btn btn-outline-primary btn-lg" type="button">Register</button>
                    </div>
                </div>
            </section>
            <section className="booking-block avant">
                <div className="container">
                    <div className="heading">
                        <h2>Why join us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card avant-item border 0">
                                <div className="card-header bg-transparent border-0">
                                    <i className="icon ion-ios-star-outline"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Text1</h3>
                                    <p className="card-text">text2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card avant-item border 0">
                                <div className="card-header bg-transparent border-0">
                                    <i className="icon ion-ios-star-outline"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Text3</h3>
                                    <p className="card-text">text4</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card avant-item border 0">
                                <div className="card-header bg-transparent border-0">
                                    <i className="icon ion-ios-star-outline"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Text5</h3>
                                    <p className="card-text">text6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="booking-block review gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5 offset-lg-1 text">
                            <h3> review title</h3>
                            <p> review text</p>
                        </div>
                        <div className="col-md-12 col-lg-5 offset-lg-1 text">
                            <h3> review title</h3>
                            <p> review text</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="page-footer">
                <div className="container">
                    <div className="links">
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href="">Register your bussiness</a>
                    </div>
                    <div className="social-icons">
                        <a href="">
                            <i className="icon ion-social-facebook"></i>
                        </a>
                        <a href="">
                            <i className="icon ion-social-instagram-outline"></i>
                        </a>
                        <a href="">
                            <i className="icon ion-social-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>
            <script src="/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/js/jqury-3.5.1.min.js"></script>
            <script src="/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.comajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
            <script src="/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/js/jquery.min.js"></script>
                <script src="/Users/Bogdan/Desktop/CodeCool.NET/TW4.2/Bookify/BookingReact/ClientApp/src/Assets/js/script.min.js"></script>
                <script type='text/javascript' src='widthfix.js'></script>
                <script type='text/javascript'>
                    matchScreenWidth(E('navigation'));
  </script>
            </body>
        </html>



    );
}
export default Categories;