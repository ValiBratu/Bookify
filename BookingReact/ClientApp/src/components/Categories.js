import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";




function Categories() {
    const categoriesApi = "https://localhost:44345/api/categories/";
    const [categoryList, setCategoryList] = useState([]);

    const categoryIdRoute = "/categories/";

    useEffect(() => {
        
        fetch(categoriesApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategoryList(data);
               
            })
            .catch(err=>console.log(err))
            
    }, []);
    return (
        <section className="booking-block categs">
            <div className="container">
                <center><h3> Our services </h3></center>

                {categoryList.map((data, i) => (
                    <div className="row no-gutters" key={i }>
                        <div className="col-md-4 item zoom-on-hover">
                            <Link to={"/categories/"+data.id}>
                                <img className="img-fluid image" src={data.photo} />
                                <h4 className="top-left">{data.name}</h4>
                            </Link>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>

        );
}
export default Categories;

