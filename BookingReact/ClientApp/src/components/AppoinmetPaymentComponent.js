import React, { useState, useEffect } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import AppoinmentCompleteComponent from './AppoinmentCompleteComponent';
import ReactDOM from 'react-dom';

const AppoinmentPaymentComponent=(props)=> {

    
    const AppoinmentData = props.location.propsData;
   
    
    const [paymentDetails, setPaymentDetails] = useState();

    const [appoinmentDetails, setAppoinmentDetails] = useState();

    useEffect(() => {
        const paymentApi = "https://localhost:44345/api/Appoinments/" + AppoinmentData.bussinessId + "/employee/" + AppoinmentData.employeeId + "/user/" + AppoinmentData.userId + "/service/" + AppoinmentData.serviceId;

        fetch(paymentApi)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPaymentDetails(data[0]);

            })
            .catch(err => console.log(err))

    }, []);

    const showDetails = () => {
       
        const details = (
            <>
                <br></br>
                <h3>Appoinment Details:</h3>
                <h4>Bussiness Name: <b>{paymentDetails.bussinessName}</b></h4>
                <h4>Service: <b>{paymentDetails.serviceName}</b></h4>
                <h4>Price: <b>{paymentDetails.price} RON</b></h4>
                <h4>Employee Name: <b>{paymentDetails.employeeName}</b></h4>
            </>
        );
        setAppoinmentDetails(details);

    }

    const pStyle = {
        margin: "0 auto",
        color: "red",
        paddingLeft: "60px"
    }

    const verifyPaymentInputs = () => {
        const cardNumber = document.getElementById("cardNumber").value;
        const expityMonth = document.getElementById("expityMonth").value;
        const expityYear = document.getElementById("expityYear").value;
        const cvCode = document.getElementById("cvCode").value;

        const warning = document.getElementById("warning");
        if (cardNumber.toString().length == 0 || expityMonth.toString().length == 0 || expityYear.toString().length == 0 || cvCode.toString().length == 0) {
            
            warning.textContent = "All fields must be completed!";
            return;
        }
        warning.textContent = "";
        
        addAppoinmentToDB();
        reworkNeeded();
    }

    const addAppoinmentToDB = () => {
        const AppoinmentsAPI = "https://localhost:44345/api/Appoinments";

        const sentData = {
            bussinessId: AppoinmentData.bussinessId,
            userId: AppoinmentData.userId,
            date: AppoinmentData.date,
            serviceId: AppoinmentData.serviceId,
            employeeId: AppoinmentData.employeeId
        }

        fetch(AppoinmentsAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                sentData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
            })
            .catch(error => {
                console.log(error)
            })
    }

    const reworkNeeded = () => {
        const mainDiv = document.getElementById("mainDiv");

        const toReworkAfter = (
            <AppoinmentCompleteComponent></AppoinmentCompleteComponent>
        );
        ReactDOM.render(toReworkAfter, mainDiv);
    }
   
    return (
        <div id="mainDiv">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="main main-raised">
                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="profile">

                                <div className="name">
                                    <h2 className="title">Just one more Step</h2>
                                    <Button id="showDetailsButton" className="btn btn-primary" onClick={showDetails }>Show Appoinment Details</Button>
                                    <div id="AppoinmentDetailsDiv">
                                        {appoinmentDetails}
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div id="test" style={{ marginRight: "-700px" }}>
                            <br></br>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-4 col-md-4">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title">
                                                    Payment Details
                                                     </h3>
                  
                                            </div>
                                            <div className="panel-body">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label htmlFor="cardNumber">
                                                            CARD NUMBER</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" />
                                                            <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xs-7 col-md-7">
                                                            <div className="form-group">
                                                                <label htmlFor="expityMonth">
                                                                    EXPIRY DATE</label>
                                                                <div className="col-lg-6 pl-ziro">
                                                                    <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                                                </div>
                                                                <div className="col-lg-6 pl-ziro">
                                                                    <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-5 col-md-5 pull-right">
                                                            <div className="form-group">
                                                                <label htmlFor="cvCode">
                                                                    CV CODE</label>
                                                                <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <br />
                                        <Button className="btn btn-success btn-lg btn-block" onClick={verifyPaymentInputs} >Pay</Button>
                                        <div>
                                            <p id="warning" style={ pStyle}></p>
                                         </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}


export default AppoinmentPaymentComponent;