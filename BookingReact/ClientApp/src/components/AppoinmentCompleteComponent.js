import React, { useState, useEffect } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';


const AppoinmentCompleteComponent = (props) => {


 

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className="jumbotron text-center">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead"><strong>Please check your email!</strong> We are waiting for you!</p>
                <hr />
                <p>
                    Having trouble? <a href="/">Contact us</a>
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                </p>
            </div>
            </>
    );
}


export default AppoinmentCompleteComponent;