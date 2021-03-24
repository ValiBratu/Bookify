import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AddImageComponent from './AddImagesComponent';



function WorkPlaceComponent(props) {

    const BussinessImagesAPI = "https://localhost:44345/api/BussinessPhotoes/bussinessId/";

    const [images, setImages] = useState([]);

    useEffect(() => {
        
        fetch(BussinessImagesAPI + props.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setImages(data);
            })
            .catch(err => console.log(err))

    }, []);



    return (
        <>
            <AddImageComponent id={ props.id}></AddImageComponent>
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">

                        {images.map((image, i) => (
                            <div className="carousel-item active" key={ i}>
                                <img className="d-block w-100" src={"data:image/jpeg;base64," + image.bussinessImage} />
                                <br></br>
                            </div>
                            
                        ))}

                    </div>
                </div>
            </div>
         </>
    );

}

export default WorkPlaceComponent;