
//import { Route, Router } from 'react-router';
//import PropTypes from 'prop-types';
import { HashRouter, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Categories from './components/Categories';
import PropTypes from 'prop-types';
import Bussinesses from './components/Bussinesses';

function App() {


    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" >
                    <Categories></Categories>
                </Route>

                    <Route exact path="/BeautySallons"  >
                        <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/1"}></Bussinesses>
                </Route>

                <Route exact path="/Gyms"  >
                    <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/2"}></Bussinesses>
                </Route>

                <Route exact path="/BarberShops"  >
                    <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3"}></Bussinesses>
                </Route>    

                <Route exact path="/bussiness/{id}"  >
                    <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3"}></Bussinesses>
                </Route>
            </Switch>
        </div>
    </Router>
    );

}
export default App;
