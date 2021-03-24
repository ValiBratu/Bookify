import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';


function Bussinesses(props) {
    const bussinessApi = "https://localhost:44345/api/BussinessByCategories/";
    const CitiesApi = "https://localhost:44345/api/Cities";

    const [bussinessList, setBussinessList] = useState([]);

    const [CitiesList, setCitiesList] = useState({
        selectOptions: []
    });

    

    var BussinessUrl = "/bussiness/";

    useEffect(() => {
        // fetch: GET all bussinesses with categoryId == props.match.params.id
        fetch(bussinessApi + props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                console.log(bussinessList);
                setBussinessList(data);
             
            })
            .catch(err => console.log(err))

        // fetch: GET all Cities 
        fetch(CitiesApi)
            .then(response => response.json())
            .then(data => {
                const allCitiesConst = [{ "value": 0, "label": "All Cities" }];
                const options = data.map(d => ({
                    "value": d.id,
                    "label": d.name
                }))
                
                setCitiesList({ selectOptions: allCitiesConst.concat(options) });
                
            })
            .catch(err => console.log(err));
    }, []);



    const getBussinessByCity = (cityid) => {
        const BussinessesByCityAndCategoryApi = "https://localhost:44345/api/BussinessByCategories/" + props.match.params.id + "/city/" + cityid;

        fetch(BussinessesByCityAndCategoryApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                console.log(bussinessList);
                setBussinessList(data);

            })
            .catch(err => console.log(err))

    }


    const updateCity = (event) => {
        
        getBussinessByCity(event.value);
    }



    return (

        <section className="booking-block block-intro">
            <br></br>
            <br></br>
            <br></br>
            <Select id="selectCityBar" options={CitiesList.selectOptions} onChange={updateCity} />
            <br></br>
            <br></br>
            <div className="container">
                

                <div className="row">

                    {bussinessList.map((bussiness, i) => (
                        <div className="col col-lg-3" id={bussiness.id} key={i} style={{ marginRight:"40px" }}>

                            <div className="card" style={{ width: '18rem', height: "400px" }}>
                                <img className="card-img-top" src={"data:image/jpeg;base64," + bussiness.photo} style={{ height:"200px" }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{ bussiness.name}</h5>
                                    <p className="card-text">Location: {bussiness.location}</p>
                                    <p className="card-text">Phone number: {bussiness.phoneNumber}</p>
                                    <Link to={BussinessUrl + bussiness.id} className="btn btn-primary">Show Details.</Link>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </section>

    );
}
export default Bussinesses;