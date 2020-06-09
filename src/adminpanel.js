import React, { Component } from "react"
import NavBar from "./navbaradmin.js"
import SideBaradmin from './sidebaradmin.js'
import Home from "./home.js"
import Dashboard from "./dashboard.js"
import { NavLink,Redirect,Link } from "react-router-dom"

class adminpanel extends Component {
    render() {


        if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'admin') {
            return (
                <div>
                    <NavBar />
                    <SideBaradmin />
                </div>
            )
        }
        else if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'customer') {
            return(
                <Link to='/dashboard'></Link>
            )
        }
        else {
            return(
            <Link to='/'></Link>
            )}




    }
}


export default adminpanel