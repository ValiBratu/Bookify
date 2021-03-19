import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ScheduleComponent from './ScheduleComponent';
import ModalMessageComponent from './ModalMessageComponent';
import ReactDOM from 'react-dom';
function AppoinmentComponent(props) {


    
    const [startDate, setStartDate] = useState(new Date());

   
 
   

    const makeAppoinment = (appoinmentDate) => {
        const bookData = props.data;
      
        bookData.date = appoinmentDate;

        const schedule = (
            <ScheduleComponent data={bookData}></ScheduleComponent>
        );
        addAppoinmentToDb(bookData);
        props.bookComp(schedule);
    }
    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }

    const addAppoinmentToDb = (bookData) => {
        const appoinmentsAPI = "https://localhost:44345/api/Appoinments";
        const correctBookingDate = new Date(bookData.date);
        correctBookingDate.setMinutes(correctBookingDate.getMinutes() + 120);
        const sentData = {
            bussinessId: bookData.bussinessId,
            userId: bookData.userId,
            date: correctBookingDate,
            serviceId: bookData.serviceId,
            employeeId: bookData.employeeId
        }
        
        fetch(appoinmentsAPI, {
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
                if (data.title != "Bad Request") {
                    modalConfirm();
                  
                }
                else {
                    alert("nah");
                }
              
            })
            .catch(error => {
                console.log(error)
            })

    }

    const modalConfirm = () => {
        const modalDiv = document.getElementById("ModalConfirmation");
        
        const modal = document.createElement("ModalMessageComponent");
        ReactDOM.render(modalDiv, modal);
    }



    return (
        <div>
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    dateFormat="MMMM d, yyyy h:mm "
                />
                <button className="btn btn-primary" onClick={() => makeAppoinment(startDate)} >Book Now!</button>
            </div>
            <div id="ModalConfirmation">
            </div>
            
        </div>
    );

}

export default AppoinmentComponent;