﻿import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import ReactDOM from 'react-dom';
import ServicesCompponent from './ServicesComponent';
import AppoinmentComponent from './AppoinmentComponent';
import EmployeesCompponent from './EmployeesComponent';
import EditBussinessComponent from './EditBussinessComponentcs';

const BussinessPage = (props) => {

   
    const [bussinessDetails, setbussinessDetails] = useState([]);
    const bussinessPageApi = "https://localhost:44345/api/Bussinesses/";

    const [bookingData, setbookingData] = useState({
        bussinessId: null,
        serviceId: null,
        employeeId: null,
        date:null

    });

    const [bookingComponents, setBookingComponents] = useState();
    
    useEffect(() => {


        console.log(props.match.params.id);
        fetch(bussinessPageApi + props.match.params.id)
            .then(response => response.json())
            .then(data => {
             
                setbussinessDetails(data);
                
            })
            .catch(err => console.log(err))
        
    }, [bussinessPageApi]);


    const makeIconsSameClass = () => {
        const LocationIcon = document.getElementById("locationIcon");
        const PlaceIcon = document.getElementById("placeIcon");
        const BookIcon = document.getElementById("BookIcon");

        LocationIcon.setAttribute("class", "nav-link");
        PlaceIcon.setAttribute("class", "nav-link");
        BookIcon.setAttribute("class", "nav-link");

    }

    const renderMap = () => {

        makeIconsSameClass();

        let Map = (
            <MapComponent
                latitude={bussinessDetails.latitude}
                longitude={bussinessDetails.longitude}>

            </MapComponent>
        );
       

        const MapDiv = document.getElementById("showRequest");
        const LocationIcon = document.getElementById("locationIcon");

        LocationIcon.setAttribute("class", "nav-link active");

        ReactDOM.render(Map, MapDiv);
     
    }


    const renderServices = () => {
        makeIconsSameClass();

        
        const BookIcon = document.getElementById("BookIcon");

        BookIcon.setAttribute("class", "nav-link active");

        const bookingDiv = document.getElementById("showRequest");

        const bookingComponents = (
            <div>
                <h2 style={{ textAlign: "center" }} >Services</h2>
                <div id="servicesDiv">
                    <ServicesCompponent id={props.match.params.id} />

                </div>

                <h2 style={{ textAlign: "center" }} >Employees</h2>
                <div id="employeesDiv">
                    <EmployeesCompponent BussinessId={props.match.params.id} />
                </div>

                <h2 style={{ textAlign: "center" }} >Calendar</h2>
                <div id="calendarDiv" style={{ textAlign: "center" }}>
                    <AppoinmentComponent id={props.match.params.id} />
                </div>
                <br></br>
                    <br></br>
            </div>
            );

        ReactDOM.render(bookingComponents, bookingDiv);

    }


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
                <br></br>
                <EditBussinessComponent id={props.match.params.id} businessDetails={bussinessDetails}></EditBussinessComponent>
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
                        <a className="nav-link" id="locationIcon" onClick={renderMap} role="tab" data-toggle="tab">
                          <i className="material-icons">camera</i> Location
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="placeIcon"  role="tab" data-toggle="tab">
                          <i className="material-icons">palette</i> Working place
                        </a>
                      </li>
                        <li className="nav-item">
                            <a className="nav-link" id="BookIcon" onClick={renderServices} role="tab" data-toggle="tab">
                          <i className="material-icons">favorite</i> Book now
                        </a>
                      </li>
                        </ul>
                  </div>
                    </div>
                        </div>

                    <div id= "showRequest">



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