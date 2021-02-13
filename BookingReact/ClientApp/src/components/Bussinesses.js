import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Bussinesses(props) {
    const bussinessApi = "https://localhost:44345/api/BussinessByCategories/";
    const [bussinessList, setBussinessList] = useState([]);

    var BussinessUrl = "/bussiness/";

    useEffect(() => {
        fetch(bussinessApi + props.match.params.id)
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
                            <Link to={BussinessUrl + data.id} className="btn btn-primary">Show Details.</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
export default Bussinesses;