
//import { Route, Router } from 'react-router';
//import PropTypes from 'prop-types';
import { HashRouter, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Categories from './components/Categories';
import PropTypes from 'prop-types';
import Bussinesses from './components/Bussinesses';
import BussinessPage from './components/BussinessPage';
import Footer from './components/Footer';
import ButtonAppBar from './components/Navbar';

function App() {


    return (
        <Router>
            <ButtonAppBar></ButtonAppBar>
        <div>
            <Switch>
                <Route exact path="/" >
                    <Categories></Categories>
                </Route>

                    <Route exact path="/categories/:id" component={Bussinesses} ></Route>

                    <Route exact path="/bussiness/:id" component={BussinessPage} ></Route>



            </Switch>
            </div>
            <Footer></Footer>
        </Router>
       
    );

}
export default App;
