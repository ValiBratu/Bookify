import React, { useState } from 'react';
import './material-kit.css'
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';


function AddImageComponent(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const bussinessPhotosAPI = "https://localhost:44345/api/BussinessPhotoes";

    let newPhoto;


    const saveButtonOnClick = () => {
        handleChanges();
        handleClose();
    }

    const getImageOnChange = (e) => {

        var fileList = document.getElementById("imageInput").files;
        console.log(fileList);
        var fileReader = new FileReader();
        if (fileReader && fileList && fileList.length) {
            fileReader.readAsArrayBuffer(fileList[0]);
            fileReader.onload = function () {
                var imageData = fileReader.result;
                console.log(imageData);

                let base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));
                newPhoto = base64String;
                
            };
        }

    }
    
    const handleChanges = () => {
        const bussinessId = props.id;
        postImageToDB(bussinessId, newPhoto);
    }

    const postImageToDB = (BussinessID,image) => {


        const sentData = {
            bussinessId: BussinessID,
            bussinessImage:image
        }

        fetch(bussinessPhotosAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sentData)
            //body: sentData
        })
            .then(response => { console.log(response) })
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.log(error)
            })


    }



    return (
        <>
            <Button variant="primary" style={{ marginLeft:"480px"}} onClick={handleShow}>
                Add new image
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add Image</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <br></br>

                    <label className="form-label" htmlFor="imageInput">Select new photo</label>
                    <div className="input-group">
                        <input type="file" accept=" image/jpeg" className="form-control" id="imageInput" onChange={getImageOnChange} />
                    </div>
                    <br></br>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveButtonOnClick}>
                        Save Image
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddImageComponent;