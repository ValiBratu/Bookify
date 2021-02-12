import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Bussinesses() {
    const bussinessApi = "https://localhost:44345/api/BussinessByCategories/3";
    const [bussinessList, setBussinessList] = useState([]);

    var BussinessUrl = "/bussiness/";

    useEffect(() => {
        fetch(bussinessApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                console.log(bussinessList);
                setBussinessList(data);
            })
            .catch(err => console.log(err))

    }, []);
    return (

        <section className="booking-block block-intro">
            <br></br>
            <br></br>
            <br></br>
            <div className="container">

                {bussinessList.map((data, i) => (
                    <div className="card" key={i}>

                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.description}</p>
                            <a href={BussinessUrl + data.id} className="btn btn-primary">Show Details.</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
export default Bussinesses;