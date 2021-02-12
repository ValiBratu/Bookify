import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./RegisterPageCSS.css"

const RegisterPage = (props) => {


    const [userInfo, setUserInfo] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Password: "",
        ConfirmPass: ""
    });

    const allInputsAreComplete = (event) => {

    };


   const getInputValues = (event) => {



       if (userInfo.Password != userInfo.ConfirmPass) {
           alert("no");
           return;
       }
       
       console.log("Firstname "+userInfo.FirstName);
       console.log("Lastname " +userInfo.LastName);
       console.log("Email " +userInfo.Email);
       console.log("Phone " +userInfo.Phone);
       console.log("Pass " +userInfo.Password);
       console.log("ConfirmPass " + userInfo.ConfirmPass);

    };

    const handleInput = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
        console.log(userInfo.FirstName);

    };

    //const addUserToDb = () => {



    //};
    

    return (
        <div className="registerContainer col-md-offset-4">
            <h1 className="h1Style">Sign Up</h1>

            <div className="col-sm-12 pt-3" >
                <input type="text" className="form-control rounded-pill" id="FirstName" placeholder="First Name" name="FirstName"  onChange={handleInput}></input>
            </div>
            <div className="col-sm-12 pt-3">
                <input type="text" className="form-control rounded-pill" id="LastName" placeholder="Last Name" name="LastName"  onChange={handleInput}></input>
             </div>
            <div className="col-sm-12 pt-3">
                <input type="email" className="form-control rounded-pill" id="Email" placeholder="Enter email" name="Email"  onChange={handleInput}></input>
            </div>
            <div className="col-sm-12 pt-3">
                <input type="text" className="form-control rounded-pill" id="Phone" placeholder="Enter Mobile No." name="Phone"  onChange={handleInput}></input>
                </div>
            <div className="col-sm-12 pt-3">
                <input type="password" className="form-control rounded-pill" id="Password" placeholder="Type your Password" name="Password"  onChange={handleInput}></input>
            </div>
            <div className="col-sm-12 pt-3">
                <input type="password" className="form-control rounded-pill" id="ConfirmPass" placeholder="Confirm Password" name="ConfirmPass"  onChange={handleInput}></input>
            </div>

            <br></br>
            <br></br>
            <button className="col-md-4 col-md-offset-4 btn registerButton"  onClick={getInputValues} type="button"> Submit
            </button>
        </div>
    );
}
export default RegisterPage;