import React, { useState } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
function AddEmployeeComponent(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const saveButtonOnClick = () => {
        handleSaveChanges();
        handleClose();
    }

  
    const handleSaveChanges = () => {
        const Name = document.getElementById("employeeName").value;
        const Description = document.getElementById("employeeDescription").value;

        addEmployeeToDB(Name, Description, parseInt(props.BussinessId));

    }



    const addEmployeeToDB = (EmployeeName, EmployeeDescription, bussinessid) => {

        const EmployeeAPI = "https://localhost:44345/api/Employees";

        const sentData = {
            name: EmployeeName,
            description: EmployeeDescription,
            bussinessId: bussinessid,
            serviceId: 1
        }

        fetch(EmployeeAPI, {
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
                Add Employee
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>

                        <input type="text" className="form-control" placeholder="Name" name="employeeName" id="employeeName" />
                    </div>

                    <br></br>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>

                        <input type="text" className="form-control" placeholder="Short Description" name="employeeDescription" id="employeeDescription" />
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


export default AddEmployeeComponent;