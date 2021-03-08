import React, { useState, useEffect } from 'react';
import AddServiceComponent from './AddServiceComponent';
import ReactDOM from 'react-dom';
function ServicesCompponent(props) {

    const servicesForBussinessApi = "https://localhost:44345/api/ServicesByBussiness/";

    const [services, setServices] = useState([]);

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
                console.log(data);
                fetchServices();
            })
            .catch(err=>console.log(err))
      
    }

    return (
        <div style={{ textAlign: "center", justifyContent: "center" }}>
            <br></br>
            
            <AddServiceComponent BussinessId={ props.id}></AddServiceComponent>
            <div className="row">

                {services.map((service, i) => (
                    <div className="col col-lg-3" id={service.serviceId} key={i}>

                        <div className="card">
                          
                            <a className="btn btn-just-icon btn-link btn-dribbble" > <i style={trashIconStyle} className="material-icons" onClick={() => deleteService(service.serviceId)}>delete_sweep</i></a>
                            <div className="card-body">
                                <h5 className="card-title">{service.serviceName}</h5>
                                <p className="card-text">Duration: {service.serviceDuration} Minutes</p>
                                <p className="card-text">Price: {service.price} RON</p>
                                <button  className="btn btn-primary">Book Now!</button>
                            </div>
                             
                        </div>
                    </div>

                ))}
             </div>
        </div>
    );

}

export default ServicesCompponent;