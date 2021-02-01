import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
//fetch(categoriesApi, { mode: 'no-cors' })
//const categoriesApi = "https://localhost:44345/api/categories/";

function Categories() {
    const categoriesApi = "https://localhost:44345/api/categories/";
    const [categoryList, setCategoryList] = useState([]);


    useEffect( () => {
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
                        {data.id == 1 &&
                            <Link className="btn" to="/BeautySallons">ShowAll</Link>
                        }
                        {data.id == 2 &&
                            <Link className="btn" to="/Gyms">ShowAll</Link>
                        }
                        {data.id == 3 &&
                            <Link className="btn" to="/BarberShops">ShowAll</Link>
                        }
                        </div>
                    </div>
                ))}
        </div>

        );
}
export default Categories;

