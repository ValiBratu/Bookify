//import { Route, Router } from 'react-router';
//import PropTypes from 'prop-types';
import { HashRouter, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Categories from './components/Categories';
import PropTypes from 'prop-types';
import Bussinesses from './components/Bussiness';
import NavMenu from './components/NavMenu';
import { Link } from 'react-router-dom';

function App() {


    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" >
                        <NavMenu></NavMenu>
                        <Categories></Categories>
                    </Route>

                    <Route exact path="/BeautySallons"  >
                        <NavMenu></NavMenu>
                        <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/1%22%7D%3E</Bussinesses>"}/>
                </Route>

                    <Route exact path="/Gyms"  >
                        <NavMenu></NavMenu>
                            <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/2%22%7D%3E</Bussinesses>"}/>
                </Route>

                    <Route exact path="/BarberShops"  >
                        <NavMenu></NavMenu>
                                <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3%22%7D%3E</Bussinesses>"}/>
                </Route>

                    <Route exact path="/bussiness/{id}"  >
                        <NavMenu></NavMenu>
                                    <Bussinesses site={"https://localhost:44345/api/BussinessByCategories/3%22%7D%3E</Bussinesses>"}/>
                </Route>
            </Switch>
        </div>
    </Router>
    );

}
export default App;