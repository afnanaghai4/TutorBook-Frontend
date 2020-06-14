import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Modal from "react-modal"
import Modal3 from "react-bootstrap/Modal"
import { Button, Dropdown, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { List } from "react-bootstrap"
import NavBar from "./navbar3.js"
import Profile from "./profile.js"
import axios from "axios"
import Footer from "./footer.js"
import SearchBar from "./searchbar.js"



class DashBoard2 extends Component {

    constructor() {
        
        super()
        this.state = {

            tutor: [],
            isActive: false,
            area:""
    
        }
        this.gettutorid = this.gettutorid.bind(this);
        const getid = "";

       
        }

    

    componentDidMount() {
        fetch(`http://localhost:4000/dashboard2`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    tutor: data

                })

            })

        if (localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('tok') &&
            localStorage.getItem('type') == 'finder') {

        }
        else {
            this.props.history.push('/')
        }
    }


    
     
    
    


    gettutorid(id) {

        localStorage.setItem("id", id);

    }
    


    render() {



        return (


            <div>
                <NavBar />

                
                <br />
                
                <h1>Welcome Back, TutorFinder!</h1>
                <br />
                <br />

                
                {/* <input   placeholder="search" onChange={this.changehandler}></input>
                <button className="btn btn-primary" onClick={this.submithandler}>search</button> */}
                
                <div class="container">

                    <h2>Tutors Available: </h2>
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
                                                Email
							</div>
                                            <div class="cell">
                                                Contact
							</div>
                                            <div class="cell">
                                                Area
							</div>
                                            
                                        </div>
                                        {this.state.tutor.map(arr => {
                                            return (

                                                <div class="row">
                                                    <div class="cell" data-title="Full Name" key={arr.user_id}>
                                                        {arr.fullname}
                                                    </div>
                                                    <div class="cell" data-title="Age">
                                                        {arr.email}
                                                    </div>
                                                    <div class="cell" data-title="Job Title">
                                                        {arr.contact}
                                                    </div>
                                                    <div class="cell" data-title="Location">
                                                        {arr.area}
                                                    </div>
                                                    <div class="cell" data-title="details">
                                                        <Link
                                                            to='/tutordetails/:id'
                                                            onClick={() => this.gettutorid(arr.user_id)}
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


export default DashBoard2