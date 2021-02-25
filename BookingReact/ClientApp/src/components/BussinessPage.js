import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactBingmaps } from 'react-bingmaps';
import MapComponent from './MapComponent';

const BussinessPage = (props) => {

    const APIkey = "AgOE4RYwhEH-5pwizHGRxlfspQf1A0adxJcISTDPBOU3gin7UzD6mevQrPKabJAQ";

    const [bussinessDetails, setbussinessDetails] = useState([]);
    const bussinessPageApi = "https://localhost:44345/api/Bussinesses/";

    
    useEffect(() => {


        console.log(props.match.params.id);
        fetch(bussinessPageApi + props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setbussinessDetails(data);


            })
            .catch(err => console.log(err))

    }, [bussinessPageApi]);





    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">

                    <div className="name">
                      <h3 className="title">{bussinessDetails.name}'s Page</h3>
                      <h6>Barber Shop</h6>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble" /></a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter" /></a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-pinterest" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p className="card-text">{bussinessDetails.description}</p>
              </div>
                        <br></br>
                    <div className="description text-center">
                <p className="card-text">{bussinessDetails.location}</p>
                        </div>
                        <br></br>
                    <div className="description text-center">
                <p className="card-text">{bussinessDetails.email}</p>
                        </div>
                        <br></br>
                        <br></br>


              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile-tabs">
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active"  role="tab" data-toggle="tab">
                          <i className="material-icons">camera</i> Location
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link"  role="tab" data-toggle="tab">
                          <i className="material-icons">palette</i> Working place
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link"  role="tab" data-toggle="tab">
                          <i className="material-icons">favorite</i> Book now
                        </a>
                      </li>
                        </ul>
                  </div>
                    </div>
                    <MapComponent
                        latitude={bussinessDetails.latitude}
                        longitude={bussinessDetails.longitude}
                    ></MapComponent>

              </div>

            </div>
                </div>
            </div>
            <div>

            </div>



        </div>






    );
}
export default BussinessPage;