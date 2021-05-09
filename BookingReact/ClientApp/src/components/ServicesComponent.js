import React, { useState, useEffect } from 'react';
import AddServiceComponent from './AddServiceComponent';
import ReactDOM from 'react-dom';
import EmployeesCompponent from './EmployeesComponent';
import { useGlobalUser } from './utils/AuthContext';
function ServicesCompponent(props) {

    const servicesForBussinessApi = "https://localhost:44345/api/ServicesByBussiness/";

    const [services, setServices] = useState([]);


    const { user } = useGlobalUser();
    useEffect(() => {

        fetchServices();
        

    }, []);

    const trashIconStyle = {
    textAlign: "right",
    marginRight: "10px",
    marginTop: "5px"
    };


    
    const fetchServices = () => {
        fetch(servicesForBussinessApi + props.id)
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err))
    }


    const deleteService = (id) => {

        const servicesAPI = "https://localhost:44345/api/Services/";
        fetch(servicesAPI + id, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                
                fetchServices();
            })
            .catch(err=>console.log(err))
      
    }


    const showEmployeesAndAddService = (serviceid) => {

        const bookData = props.data;
        bookData.serviceId = serviceid;

        const employees = (<div>

            <h2 style={{ textAlign: "center" }} >Employees</h2>
            <div id="employeesDiv">
                <EmployeesCompponent BussinessId={props.id} bookComp={props.bookComp} data={bookData} />
            </div>
        </div>);

        props.bookComp(employees);

    }
     

    return (
        <div style={{ textAlign: "center", justifyContent: "center" }} id ="bookingDiv">
            <br></br>
            
         
            <div className="row">

                {services.map((service, i) => (
                    <div className="col col-lg-3" id={service.id} key={i}>

                        <div className="card">
                            {user.Role ==="Admin"? (
                                <a className="btn btn-just-icon btn-link btn-dribbble" > <i style={trashIconStyle} className="material-icons" onClick={() => deleteService(service.id)}>delete_sweep</i></a>
                            ) : (<></>)}
                           
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">Duration: {service.duration} Minutes</p>
                                <p className="card-text">Price: {service.servicePrice} RON</p>
                                {user.Auth ? (
                                    <button className="btn btn-primary" onClick={() => showEmployeesAndAddService(service.id, service.name, service.duration)} >Book Now!</button>
                                ): (<></>)}
                               
                            </div>
                             
                        </div>
                    </div>

                ))}
                
             </div>
        </div>
    );

}

export default ServicesCompponent;