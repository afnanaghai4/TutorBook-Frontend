import React, { Component } from "react"
import './sidebaradmin.css' 
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap"
import { NavLink,Redirect,Link } from "react-router-dom"


class SideBar extends Component{
    render(){
        return(
            <div>
            <div class="sidenav">
    <Link to='/useradmin'>USERS</Link>
    <Link to='/bookingadmin'>Bookings</Link>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
    </div>
            </div>
        )
    }
}


export default SideBar