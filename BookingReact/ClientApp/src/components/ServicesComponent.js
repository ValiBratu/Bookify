import React, { useState, useEffect } from 'react';

function ServicesCompponent(props) {

    const servicesForBussinessApi = "https://localhost:44345/api/ServicesByBussiness/";

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch(servicesForBussinessApi + props.id)
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err))

    }, []);


    return (
        <div style={{ textAlign: "center", justifyContent:"center" }}>
            
            <div className="row">
                {services.map((service, i) => (
                    <div className="col col-lg-3" id={service.serviceId} key={i}>
                        <div className="card">
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