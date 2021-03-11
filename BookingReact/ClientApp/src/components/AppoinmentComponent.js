import React, { useState, useEffect } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AppoinmentComponent(props) {
    const [startDate, setStartDate] = useState(new Date());

    const makeAppoinment = (appoinmentDate) => {
        const bookData = props.data;
        bookData.date = appoinmentDate;
        console.log(bookData);
    }


    return (
        <div>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <button className="btn btn-primary" onClick={() => makeAppoinment(startDate)} >Book Now!</button>
        </div>
    );

}

export default AppoinmentComponent;