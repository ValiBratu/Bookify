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