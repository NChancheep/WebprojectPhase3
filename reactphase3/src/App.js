import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavigationBar from "./components/navbar";
import HomePage from "./components/home";
import Menu from "./components/menu";
import Recipe from "./components/recipe";
import UserSection from "./components/user";
import FoodSection from "./components/food";
import DrinkSection from "./components/drink";
import DessertSection from "./components/dessert";

import loginforAdmin from "./components/loginforAdmin";
import accountinfo from "./components/accountinfo";

class App extends Component
{
  render()
  {
    return (
      <BrowserRouter>
        <div className = "App">
          <NavigationBar/>
          <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route path = "/user" component = {UserSection}/>
            <Route path = "/food" component = {FoodSection}/>
            <Route path = "/drink" component = {DrinkSection}/>
            <Route path = "/dessert" component = {DessertSection}/>
            <Route path = "/recipe" component = {Recipe}/>
            <Route path = "/menu" component = {Menu}/>
            <Route path = "/loginforAdmin" component = {loginforAdmin}/>
            <Route path = "/accountinfo" component = {accountinfo}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;