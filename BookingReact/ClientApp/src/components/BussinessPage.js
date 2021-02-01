import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const BussinessPage = (props) => {

    const [bussinessDetails, setbussinessDetails] = useState([]);
    const bussinessPageApi = "https://localhost:44345/api/Bussinesses/" + props.id;

    useEffect(() => {

        fetch(bussinessPageApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setbussinessDetails(data);


            })
            .catch(err => console.log(err))

    }, [bussinessPageApi]);
    return (
        <div className="container">

            {bussinessDetails.map((data, i) => (
                <div className="card" key={i}>

                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <p>{data.location } </p>
                    </div>
                </div>
            ))}
        </div>

    );
}
export default BussinessPage;