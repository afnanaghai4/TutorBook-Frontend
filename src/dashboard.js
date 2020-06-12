import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Modal from "react-modal"
import Modal3 from "react-bootstrap/Modal"
import { Button, Dropdown, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { List } from "react-bootstrap"
import NavBar from "./navbar.js"
import Profile from "./profile.js"
import axios from "axios"
import Footer from "./footer.js"
import SearchBar from "./searchbar.js"



class DashBoard extends Component {

    constructor() {
        
        super()
        this.state = {

            tution: [],
            isActive: false,
            area:""
    
        }
        this.gettutionid = this.gettutionid.bind(this);
        const getid = "";

        this.changehandler=this.changehandler.bind(this);
        this.submithandler=this.submithandler.bind(this);
    }

    

    componentDidMount() {
        fetch(`http://localhost:4000/dashboard`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    tution: data

                })

            })

        if (localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('tok') &&
            localStorage.getItem('type') == 'customer') {

        }
        else {
            this.props.history.push('/')
        }
    }


    changehandler = name => event => {
        this.setState({
          [name]: event.target.value
        })
      }


     async submithandler(event){
         event.preventDefault();
      await fetch(`http://localhost:4000/dashboardspecific`, {
            method: 'post',
            headers:{ 'Content-Type': "application/json", 'accept': "application/json"},
            body: JSON.stringify({
                area:this.state.area
              })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    tution: data

                })

            })
      }
    
    


    gettutionid(id) {

        localStorage.setItem("id", id);

    }
    


    render() {



        return (


            <div>
                <NavBar />

                
                <br />
                
                <h1>Welcome Back, Tutor!</h1>
                <br />
                <br />

                
                <input   placeholder="search" onChange={this.changehandler}></input>
                <button className="btn btn-primary" onClick={this.submithandler}>search</button>
                
                <div class="container">

                    <h2>Tutions Available: </h2>
                    <hr />
                    <br />

                    

                    <head>
                        <title>Table V02</title>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />

                        <link rel="icon" type="image/png" href="table tamplate/images/icons/favicon.ico" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/vendor/bootstrap/css/bootstrap.min.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/vendor/animate/animate.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/vendor/select2/select2.min.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/vendor/perfect-scrollbar/perfect-scrollbar.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/css/util.css" />
                        <link rel="stylesheet" type="text/css" href="tabletemplate/css/main.css" />
                   
                    </head>
                    <body>

                        <div class="limiter">
                            <div class="container-table100">
                                <div class="wrap-table100">



                                    <div class="table">

                                        <div class="row header">
                                            <div class="cell">
                                                Full Name
							</div>
                                            <div class="cell">
                                                Grade
							</div>
                                            <div class="cell">
                                                Charge
							</div>
                                            <div class="cell">
                                                Area
							</div>
                                            <div class="cell">
                                                details
							</div>
                                        </div>
                                        {this.state.tution.map(arr => {
                                            return (

                                                <div class="row">
                                                    <div class="cell" data-title="Full Name" key={arr.tution_id}>
                                                        {arr.studentname}
                                                    </div>
                                                    <div class="cell" data-title="Age">
                                                        {arr.grade}
                                                    </div>
                                                    <div class="cell" data-title="Job Title">
                                                        {arr.fee}
                                                    </div>
                                                    <div class="cell" data-title="Location">
                                                        {arr.area}
                                                    </div>
                                                    <div class="cell" data-title="details">
                                                        <Link
                                                            to='/tutiondetails/:id'
                                                            onClick={() => this.gettutionid(arr.tution_id)}
                                                        >

                                                            Details
                        </Link>
                                                    </div>
                                                </div>


                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                        </div>




                        <script src="tabletemplate/vendor/jquery/jquery-3.2.1.min.js"></script>
                        <script src="tabletemplate/vendor/bootstrap/js/popper.js"></script>
                        <script src="tabletemplate/vendor/bootstrap/js/bootstrap.min.js"></script>
                        <script src="tabletemplate/vendor/select2/select2.min.js"></script>
                        <script src="tabletemplate/js/main.js"></script>

                    </body>



                </div>





                






            </div>
        )
    }
}


export default DashBoard