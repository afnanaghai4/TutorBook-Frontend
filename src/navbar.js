import React, { Component } from "react"
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"


class navBar extends Component {
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



          <a className="navbar-brand text-white text-uppercase" href="/">TUTORBOOK</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link text-white text-uppercase ml-5" href="/">Home <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/profile">Profile</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/bookings">Bookings</a>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}


export default navBar