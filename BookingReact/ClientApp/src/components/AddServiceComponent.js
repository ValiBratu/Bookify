import React, { useState} from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
function AddServiceComponent(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const serviceDurations = [
        {
            "value": 30,
            "label":"30 Minutes"
        },
        {
            "value": 60,
            "label": "60 Minutes"
        },
        {
            "value": 90,
            "label": "90 Minutes"
        },
        {
            "value": 120,
            "label": "120 Minutes"
        },
    ];

    const saveButtonOnClick = () => {
        handleSaveChanges();
        handleClose();
    }
    
    let serviceDuration = 0;

    const handleSaveChanges = () => {
        const serviceName = document.getElementById("serviceName").value;
        const servicePrice = document.getElementById("price").value;

        addServiceToDB(serviceName, serviceDuration, parseInt(props.BussinessId), parseFloat(servicePrice));
        
    }
     
    

    const addServiceToDB = (ServiceName,ServiceDuration,id,price) => {

        const servicesAPI = "https://localhost:44345/api/Services";

        const sentData = {
            name: ServiceName,
            duration: ServiceDuration,
            bussinessId: id,
            servicePrice: price
        }

        fetch(servicesAPI, {
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

 


    const changeDuration = (event) => {
        serviceDuration = event.value;
        
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Service
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add Service</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>
                      
                        <input type="text" className="form-control" placeholder="Service Name" name="serviceName" id="serviceName" />
                    </div>

                    <br></br>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Duration</label>
                        <Select id="exampleFormControlSelect1" className="form-control selectpicker" data-style="btn btn-link" options={serviceDurations} onChange={changeDuration } />

                    </div>
                    <br></br>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>
                        <input type="number" className="form-control" placeholder="Price(RON)" name="price" id="price" />
                    </div>
                
                    </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveButtonOnClick}>
                        Save Changes
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddServiceComponent;