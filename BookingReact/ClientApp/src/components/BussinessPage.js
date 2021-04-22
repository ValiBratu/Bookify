import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import ReactDOM from 'react-dom';
import ServicesCompponent from './ServicesComponent';
import AppoinmentComponent from './AppoinmentComponent';
import EmployeesCompponent from './EmployeesComponent';
import EditBussinessComponent from './EditBussinessComponentcs';
import AddServiceComponent from './AddServiceComponent';
import AddEmployeeComponent from './AddEmployeeComponent';
import WorkPlaceComponent from './WorkPlaceComponent';
import { useGlobalUser } from './utils/AuthContext';


const BussinessPage = (props) => {

   
    const [bussinessDetails, setbussinessDetails] = useState([]);
    const bussinessPageApi = "https://localhost:44345/api/Bussinesses/";

    const { user } = useGlobalUser();

    const [bookingData, setbookingData] = useState({
        bussinessId: null,
        serviceId:null,
        employeeId: null,
        date: null,
        userId:user.Id

    });


    const [bookingComponents, setBookingComponents] = useState();
    
    useEffect(() => {


        console.log(props.match.params.id);
        fetch(bussinessPageApi + props.match.params.id)
            .then(response => response.json())
            .then(data => {

                if (data.photo) {
                    data.photo = "data:image/jpeg;base64," + data.photo;
                }
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


    const fetchLatAndLong = () => {



        const geocodingApiKey = "AIzaSyDJofOQIFypBaj7MvcmCJkqtz5PhyuMU0c";
        const loc = bussinessDetails.location;
        const apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + loc + "&key=" + geocodingApiKey;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].geometry.location);
                renderMap(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
            })
            .catch(err => console.log(err))

    }

  
    const renderMap = (latitude,longitude) => {

        makeIconsSameClass();


        let Map = (
            <MapComponent
                latitude={latitude}
                longitude={longitude}>

            </MapComponent>
        );
       

        const MapDiv = document.getElementById("showRequest");
        const LocationIcon = document.getElementById("locationIcon");

        LocationIcon.setAttribute("class", "nav-link active");

        setBookingComponents(Map);
     
    }


    const renderServices = (bussinessid) => {
        makeIconsSameClass();
        const setData = bookingData;
        setData.bussinessId = bussinessid;
        
        
        const BookIcon = document.getElementById("BookIcon");

        BookIcon.setAttribute("class", "nav-link active");


        const serviceComp = (<div>
            <h2 style={{ textAlign: "center" }} >Services</h2>
            <div id="servicesDiv">
                <ServicesCompponent id={props.match.params.id} bookComp={updateComponent} data={setData} />

            </div>
        </div>);

        updateComponent(serviceComp);


    }

    const renderWorkPlace = (id) => {
        makeIconsSameClass();

        const workPlaceComp = (<div>
            <h2 style={{ textAlign: "center" }} >Work Place</h2>
            <div id="workplace">
                <WorkPlaceComponent id={id}></WorkPlaceComponent>

            </div>
        </div>);

        const placeIcon = document.getElementById("placeIcon");
        placeIcon.setAttribute("class", "nav-link active");

        updateComponent(workPlaceComp);

    }


    const updateComponent = (comp) => {
        setBookingComponents(comp);
    }
    const photoStyle = {
        width: "1000px",
        height: "300px",
        marginLeft:"60px"
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

                        {user.Role === "Admin" ? (
                            <>
                                <br></br>
                                <EditBussinessComponent id={props.match.params.id} businessDetails={bussinessDetails}></EditBussinessComponent>

                                <AddServiceComponent BussinessId={props.match.params.id}></AddServiceComponent>

                                <AddEmployeeComponent BussinessId={props.match.params.id}></AddEmployeeComponent>
                            </>) : (<>

                            </>)}
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
                                            <a className="nav-link" id="locationIcon" onClick={fetchLatAndLong} role="tab" data-toggle="tab">
                          <i className="material-icons">camera</i> Location
                        </a>
                      </li>
                        <li className="nav-item">
                            <a className="nav-link" id="placeIcon" onClick={() => renderWorkPlace(bussinessDetails.id)} role="tab" data-toggle="tab">
                          <i className="material-icons">palette</i> Working place
                        </a>
                      </li>
                    <li className="nav-item">
                       <a className="nav-link" id="BookIcon" onClick={() => renderServices(bussinessDetails.id, bussinessDetails.name)} role="tab" data-toggle="tab">
                          <i className="material-icons">favorite</i> Book now
                        </a>
                      </li>
                        </ul>
                  </div>
                    </div>
                        </div>

                    <div id= "showRequest">

                            {bookingComponents }

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