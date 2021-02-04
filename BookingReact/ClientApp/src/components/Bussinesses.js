import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Bussinesses = (props) =>  {
    
    const [bussinessesList, setbussinessesList] = useState([]);
   
    var BussinessByCategoriesApiUrl = "https://localhost:44345/api/BussinessByCategories/";

    useEffect(() => {
        console.log(props.match.params.id);
        fetch(BussinessByCategoriesApiUrl + props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setbussinessesList(data);
                

            })
            .catch(err => console.log(err))

    }, [props.site]);
    return (
        <div className="container">

            {bussinessesList.map((data, i) => (
                <div className="card" key={i}>
                    
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        
                    </div>
                </div>
            ))}
        </div>

    );
}
export default Bussinesses;