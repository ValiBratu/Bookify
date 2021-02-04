import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
//fetch(categoriesApi, { mode: 'no-cors' })
//const categoriesApi = "https://localhost:44345/api/categories/";

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
        <div className="row">

            {categoryList.map((data, i) => (
                <div className="card"  key={ i}>
                    
                        <div className="card-body">
                            <h5 className="card-title">{data.name }</h5>
                            <p className="card-text"></p>
                
                        <Link className="btn" to={"/categories/"+data.id }>ShowAll</Link>
     
                        </div>
                    </div>
                ))}
        </div>

        );
}
export default Categories;

