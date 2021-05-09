import React, { useState, useEffect } from 'react';
import AddServiceComponent from './AddServiceComponent';
import ReactDOM from 'react-dom';
import AppoinmentComponent from './AppoinmentComponent';
import { useGlobalUser } from './utils/AuthContext';


function EmployeesCompponent(props) {

    const EmployeesForBussinessApi = "https://localhost:44345/api/EmployeesForBussiness/";

    const [emlpoyees, setEmlpoyees] = useState([]);

    const { user } = useGlobalUser();

    useEffect(() => {

        fetchEmlpoyees();


    }, []);

    const trashIconStyle = {
        textAlign: "right",
        marginRight: "10px",
        marginTop: "5px"
    };

    const fetchEmlpoyees = () => {
        fetch(EmployeesForBussinessApi + props.BussinessId)
            .then(response => response.json())
            .then(data => {
                setEmlpoyees(data);
            })
            .catch(err => console.log(err))
    }


    const deleteEmployee = (id) => {

        const servicesAPI = "https://localhost:44345/api/Services/";
        fetch(servicesAPI + id, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                
                fetchEmlpoyees();
            })
            .catch(err => console.log(err))

    }

    const showDatePickerAndAddEmployee = (employeeid) => {
        
        

        const bookData = props.data;
        bookData.employeeId = employeeid;

        const calendarComp = (<div>
            <h2 style={{ textAlign: "center" }} >Calendar</h2>
            <div id="calendarDiv" style={{ textAlign: "center" }}>
                <AppoinmentComponent id={props.BussinessId} data={bookData} bookComp={props.bookComp} />
                </div>
            <br></br>
            <br></br>
        </div>);

        props.bookComp(calendarComp);

    }

    return (
        <div style={{ textAlign: "center", justifyContent: "center" }} id="bookingDiv">
            <br></br>

            
            <div className="row">

                {emlpoyees.map((emlpoyee, i) => (
                    <div className="col col-lg-3" id={emlpoyee.id} key={i}>

                        <div className="card">
                            {user.Role === "Admin" ? (
                                <a className="btn btn-just-icon btn-link btn-dribbble" > <i style={trashIconStyle} className="material-icons" onClick={() => deleteEmployee(emlpoyee.id)}>delete_sweep</i></a>
                            ): (<></>)}
                            <div className="card-body">
                                <h5 className="card-title">{emlpoyee.name}</h5>
                                <p className="card-text">Description: {emlpoyee.description}</p>

                                <button className="btn btn-primary" onClick={() => showDatePickerAndAddEmployee(emlpoyee.id, emlpoyee.name)}>Book now!</button>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );

}

export default EmployeesCompponent;