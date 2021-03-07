import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HeaderMainPage from './MainPageHeader';
import ReviewsComponent from './ReviewsComponent';
import WriteMessageComponent from './WriteMessageComponent';





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

        <div className="login-page sidebar-collapse">
        <div>

                <HeaderMainPage></HeaderMainPage>

            <div className="main main-raised">
                <div className="container">
                    <div className="section text-center">
                        <div className="row">
                            <div className="col-md-8 ml-auto mr-auto">
                                <h2 className="title">Our Services</h2>
                                <h5 className="description">Sort description.</h5>
                            </div>
                        </div>
                        <div className="features">
                                <div className="row">

                                    {categoryList.map((category, i) => (
                                        <div className="col-md-4 " key={i}>
                                            <Link to={"/categories/" + category.id}>
                                                <img className="img-fluid image" src={ category.photo} />
                                                <h4 className="top-left">{category.name}</h4>
                                        </Link>
                                </div>
                                    ))}
                            </div>
                        </div>
                        </div>
                        
                        <ReviewsComponent></ReviewsComponent>
                        
                        <WriteMessageComponent></WriteMessageComponent>
                       
                </div>
            </div>
            </div>
        </div>

        );
}
export default Categories;

