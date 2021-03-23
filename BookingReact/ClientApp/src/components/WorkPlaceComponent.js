import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



function WorkPlaceComponent(props) {

    //const BussinessImagesAPI = "";

    //const [images, setImages] = useState();

    //useEffect(() => {

    //    fetchImages();


    //}, []);

    //const fetchImages = () => {
    //    fetch(BussinessImagesAPI)
    //        .then(response => response.json())
    //        .then(data => {
    //            setImages(data);
    //        })
    //        .catch(err => console.log(err))
    //}


    return (
        <>
            <h1> ur on { props.id}</h1>
            </>
    );

}

export default WorkPlaceComponent;