import React, { useState } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';


function EditBussinessComponent(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const saveButtonOnClick = () => {
        handleSaveChanges();
        handleClose();
    }

    

    const handleSaveChanges = () => {
        console.log(props.businessDetails);
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const phone = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const location = document.getElementById("location").value;

        editBussiness(props.id, name, description, phone, email, location);

    }



    const editBussiness = (BussinessId,BussinessName, BussinessDescription, BussinessPhone,BussinessEmail,BussinessLocation) => {

        const editApi = "https://localhost:44345/api/Bussinesses/" + BussinessId;

        const sentData = {
            name: BussinessName,
            description: BussinessDescription,
            phoneNumber: BussinessPhone,
            email: BussinessEmail,
            location: BussinessLocation
        }

        fetch(editApi, {
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




    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Bussiness
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Bussiness</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label for="name">Name</label>
                    <div className="input-group">

                        <input type="text" className="form-control" value={props.businessDetails.name} name="name" id="name" />
                    </div>

                    <br></br>

                    <label for="description">Description</label>
                    <div className="input-group">

                        <input type="text" className="form-control" value={props.businessDetails.description} name="description" id="description" />
                    </div>
                    <br></br>

                    <label for="phoneNumber">Phone Number</label>
                    <div className="input-group">
                        
                        <input type="tel" className="form-control" value={props.businessDetails.phoneNumber}  name="phoneNumber" id="phoneNumber" />
                    </div>
                    <br></br>

                    <label for="email">Email</label>
                    <div className="input-group">

                        <input type="email" className="form-control" value={props.businessDetails.email} name="email" id="email" />
                    </div>
                    <br></br>

                    <label for="location">Location</label>
                    <div className="input-group">
                        <input type="text" className="form-control" value={props.businessDetails.location} name="location" id="location" />
                    </div>
                    <br></br>

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


export default EditBussinessComponent;