import React, { useState } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';


function ModalMessageComponent(props) {


    const [show, setShow] = useState(props.showState);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const saveButtonOnClick = () => {
       
        handleClose();
    }



    return (
        <>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Bussiness</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h1>Merge app</h1>

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


export default ModalMessageComponent;