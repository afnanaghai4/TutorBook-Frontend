import React, { Component } from "react"
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap"
import { NavLink,Link } from "react-router-dom"
import logo from './logo2.png'


class navBar extends Component {
  constructor(){
    super();
    this.clickhandler = this.clickhandler.bind(this)
}

clickhandler(){
    localStorage.removeItem('tok')
    localStorage.removeItem('type')
    
}
  
  
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



        <a class="navbar-brand" href="/">
      <div class="logo-image" style={{width: 46,
    height: 46,
    borderRadius: "100%",
    marginTop: -4}}>
          <img src={logo} class="logo.jpg" />
      <a style={{color:"#3C4CF3",fontFamily:"parkavenue",fontStyle:"italic",position:"absolute",left:6,bottom:6}}>&nbsp;TUTORBOOK</a>       
      </div>
</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto" style={{fontSize:13}}>
              <li className="nav-item active">
                <a className="nav-link text-white text-uppercase ml-5" href="/"><span className="glyphicon glyphicon-home" >
                  </span>Home <span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/profile">Profile</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/bookings">Bookings</a>
              </li>

            </ul>
            
          </div>
          <Link to='/' className="btn btn-danger" onClick={this.clickhandler}  style={{width:60,height:25,fontSize:12}}><span className="glyphicon glyphicon-log-out"></span>Logout</Link> 
        </nav>
      </div>
    )
  }
}


export default navBar