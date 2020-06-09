import React, { Component } from "react"
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"


class navbar extends Component {
    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white text-uppercase ml-5" href="/" style={{fontStyle:"normal",fontSize:15}}>ADMIN PANEL <span className="sr-only">(current)</span></a>
                            </li>

                            

                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}



export default navbar