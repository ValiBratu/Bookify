import React, { useState, useEffect } from 'react';

//fetch(categoriesApi, { mode: 'no-cors' })
//const categoriesApi = "https://localhost:44345/api/categories/";

function Categories() {
    const categoriesApi = "https://localhost:44345/api/categories/";
    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        fetch(categoriesApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                console.log(categoryList);
            })
            .catch(err => console.log(err))

    }, []);
    return (
        <div>

            <p>merge2</p>
        </div>

    );
}
export default Categories;