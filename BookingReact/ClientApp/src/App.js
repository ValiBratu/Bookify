
//import { Route, Router } from 'react-router';
//import PropTypes from 'prop-types';
import { HashRouter, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Categories from './components/Categories';
import PropTypes from 'prop-types';
import Bussinesses from './components/Bussinesses';
import BussinessPage from './components/BussinessPage';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import MapComponent from './components/MapComponent';
import RegisterBussiness from './components/RegisterBussiness';
import AppoinmentPaymentComponent from './components/AppoinmetPaymentComponent';
import { UserContext } from './components/utils/AuthContext';
import { useState } from 'react';

function App() {


    const [user, setUser] = useState({
        Id: "",
        Name: "",
        Email: "",
        Role: "",
        Auth: false

    });


    const login = (userData) => {
        setUser({
            Id: userData.Id,
            Name: userData.Name,
            Email: userData.Email,
            Role: userData.Role,
            Auth: true
        });
       
    }


    const logout = () => {
        setUser({
            Id: "",
            Name: "",
            Email: "",
            Role: "",
            Auth: false
        });
    }


    return (
        <>
            <UserContext.Provider value={{ user, login, logout }}>
        <Router>
            <NavMenu></NavMenu>
        <div>
            <Switch>
                    <Route exact path="/" >
                        <Categories><br></br></Categories>
                </Route>

                    <Route exact path="/categories/:id" component={Bussinesses} ></Route>

                    <Route exact path="/bussiness/:id" component={BussinessPage} ></Route>

                    <Route exact path="/Register" component={RegisterPage}></Route>

                    <Route exact path="/Login" component={Login}></Route>

                    <Route exact path="/Payment" component={AppoinmentPaymentComponent}></Route>

                    <Route exact path="/bussiness/{id}"  >
                        
                        <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3%22%7D%3E</Bussinesses>"} />
                    </Route>
               
            </Switch>
            </div>
            <Footer></Footer>


                </Router>
            </UserContext.Provider>
        </>
    );

}
export default App;
