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
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
function AppoinmentComponent(props) {


    
    const [startDate, setStartDate] = useState(new Date());
  
    const [linkButton, setLinkButton] = useState();

    const makeAppoinment = (appoinmentDate) => {
        const bookData = props.data;
      
        bookData.date = appoinmentDate;


        checkAppoinment(bookData);
        
    }


    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }

    const checkAppoinment = (bookData) => {
        
        const correctBookingDate = new Date(bookData.date);
        correctBookingDate.setMinutes(correctBookingDate.getMinutes() + 120);

        const appoinmentsAPI = "https://localhost:44345/api/Appoinments/" + bookData.bussinessId + "/employee/" + bookData.employeeId + "/date/" + correctBookingDate.toISOString();
        const sentData = {
            bussinessId: bookData.bussinessId,
            userId: bookData.userId,
            date: correctBookingDate,
            serviceId: bookData.serviceId,
            employeeId: bookData.employeeId
        }
        
        fetch(appoinmentsAPI)
            .then(response => response.json())
            .then(data => {
                if (data==false) {

                    const paymentButton = (
                        <>
                            <br></br>
                            <Link to={{ pathname: "/Payment", propsData: sentData }} className="btn btn-primary"  >Proceed To Payment</Link>
                        </>
                    );

                    setLinkButton(paymentButton);

                }
                else {
                    alert("Please choose another hour!");
                }
              
            })
            .catch(error => {
                console.log(error)
            })

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
            <ScheduleComponent data={props.data}></ScheduleComponent>
            <div id="paymentButtonDiv">
                {linkButton}
            </div>
        </div>
    );

}

export default AppoinmentComponent;