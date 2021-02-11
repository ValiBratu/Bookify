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

            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="text" className="form-control" id="FirstName" placeholder="First Name" name="FirstName" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
            </div>
            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="text" className="form-control" id="LastName" placeholder="Last Name" name="LastName" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
             </div>
            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="email" className="form-control" id="Email" placeholder="Enter email" name="Email" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
            </div>
            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="text" className="form-control" id="Phone" placeholder="Enter Mobile No." name="Phone" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
                </div>
            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="password" className="form-control" id="Password" placeholder="Type your Password" name="Password" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
            </div>
            <div className="col-sm-12" style={{ paddingTop: "10px" }}>
                <input type="password" className="form-control" id="ConfirmPass" placeholder="Confirm Password" name="ConfirmPass" style={{ borderRadius: "15px" }} onChange={handleInput}></input>
            </div>

            <br></br>
            <br></br>
            <button className="col-md-4 col-md-offset-4 btn registerButton"  onClick={getInputValues} type="button"> Submit
            </button>
        </div>
    );
}
export default RegisterPage;