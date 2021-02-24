
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

function App() {


    return (
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
                   

                    <Route exact path="/bussiness/{id}"  >
                        <NavMenu></NavMenu>
                        <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3%22%7D%3E</Bussinesses>"} />
                    </Route>
            </Switch>
            </div>
            <Footer></Footer>


        </Router>

    );

}
export default App;
