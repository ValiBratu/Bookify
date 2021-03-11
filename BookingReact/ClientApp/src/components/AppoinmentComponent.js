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

function AppoinmentComponent(props) {


    
    const [startDate, setStartDate] = useState(new Date());

    const makeAppoinment = (appoinmentDate) => {
        const bookData = props.data;
        bookData.date = appoinmentDate;
        console.log(bookData);

        const schedule = (
            <ScheduleComponent></ScheduleComponent>
            );

        props.bookComp(schedule);
    }
    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }

    


    return (
        <div>
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                <button className="btn btn-primary" onClick={() => makeAppoinment(startDate)} >Book Now!</button>
            </div>
        </div>
    );

}

export default AppoinmentComponent;