import React from "react";
import Home from "./home";
import News from "./news";
import Contact from "./contact";
import About from "./about";
import {Link,BrowserRouter as Router,Route,Switch} from "react-router-dom";
import My404 from "./My404";
import  Signup from "./signup";
import Api from "./api";
import Crud from "./crud";
// import { Router, Route, Switch } from "react-router";
// import {Router} from "react-router";
// import {BrowserRouter as Router,Link } from "react-router-dom";
const Header = () => {
    return(
        <React.Fragment>

        <Router>
        <div className="topnav" id="myTopnav">
        <Link to="/" >Home</Link>
        <Link to="/news" >News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="#" className="icon">
          <i className="fa fa-bars"></i>    
        </Link>

        <Link to="/signup">SignUp</Link>
        <Link to = "/api">REACT API</Link>
        <Link to ="/crud">Opration with API</Link>
        </div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/api" component={Api} />
        <Route path ="/crud" component ={Crud} />

        <Route component={My404} />
        </Switch>
        
        </Router>
 
        </React.Fragment>
        
    );
}
export default Header;