import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import App from '../App';
import { Modal, Button } from 'react-bootstrap';

function ScheduleComponent(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        fetchScheduleData();
        setShow(true)
    
    };



    const currentDate = Date.now();
    const bookData = props.data;
    

    const appoinmentsAPI = "https://localhost:44345/api/Appoinments/" + bookData.bussinessId + "/employee/" + bookData.employeeId;
    const [appoinments, setAppoinments] = useState([]);

    const fetchScheduleData = () => {

        fetch(appoinmentsAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                getAppoinments(data);
            })
            .catch(err => console.log(err))
    }
   

    const getAppoinments = (fetchedData) => {
        const newAppoinments = [];
        for (var elem of fetchedData)
        {
            const appStartDate = new Date(elem.appoinmentDate);
            
           
            const endAppDate = new Date(appStartDate);
           
            endAppDate.setMinutes(appStartDate.getMinutes() + elem.serviceDuration);
           
                const appoinmentsData = {
                    title: elem.serviceName,
                    startDate: appStartDate,
                    endDate: endAppDate
            }
            newAppoinments.push(appoinmentsData);
        }
       
        setAppoinments(newAppoinments);
       
    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Appoinments Schedule
            </Button>

            <Modal show={show} onHide={handleClose}  size="lg">
               
                <Modal.Header closeButton>
                    <Modal.Title>Schedule</Modal.Title>
                </Modal.Header>

                    <Modal.Body >
                   
                    <div>
                        <br></br>
                        <br></br>
                        <Paper>
                            <Scheduler
                                data={appoinments}
                                height={660}
                            >
                                <ViewState
                                    defaultCurrentDate={currentDate}
                                />
                                <WeekView
                                    startDayHour={9}
                                    endDayHour={19}
                                />
                                <Appointments />
                                <AllDayPanel />
                            </Scheduler>
                        </Paper>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                        </Modal.Footer>
                      
                </Modal>
                
        </>
    );

}

export default ScheduleComponent;