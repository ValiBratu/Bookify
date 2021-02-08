import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const BussinessPage = (props) => {

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
        <div className="container">
            <h1>{bussinessDetails.name}'s Page</h1>
            <br></br>
            <h2>Details:</h2>
            <div className="card">
                
                <div className="card-body">

                    <p className="card-text">{bussinessDetails.description}</p>
                    <p >{bussinessDetails.location} </p>
                    <br></br>
                    <p>{bussinessDetails.email} </p>
                    </div>
                </div>
           
        </div>

    );
}
export default BussinessPage;