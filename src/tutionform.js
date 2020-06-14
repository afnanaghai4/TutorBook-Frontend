import React, { Component } from "react"
import NavBar from "./navbar3.js"
import {Link} from "react-router-dom"
class tutionform extends Component {
    
    constructor(){
        super();
        this.state = {
            studentnames:"",
            grades:"",
            feess:"",
            areas:"",
            durations:"",
            startingdates:""
        }
        this.submithandler=this.submithandler.bind(this)
        this.changehandler=this.changehandler.bind(this)
    }

    async submithandler(){
        
      await  fetch(`http://localhost:4000/tutionform`, {
            method:'POST',
            headers:{'Content-Type':'application/json','accept':'application/json','authorization':localStorage.getItem('tok')},
            body:JSON.stringify({
                studentname:this.state.studentnames,
                grade:this.state.grades,
                fees:this.state.feess,
                area:this.state.areas,
                duration:this.state.durations,
                startingdate:this.state.startingdates
            })
        
        })
        .then(res => res.json())
        .then((res => localStorage.setItem('tok', res.token)))

        if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok') && localStorage.getItem('type') == "finder") {
    
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
    
    
    render() {
        return (
            <div>
                <NavBar />
                <head>
                    <title>Contact V18</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <link rel="icon" type="image/png" href="formtemplate/images/icons/favicon.ico" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/animate/animate.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/css-hamburgers/hamburgers.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/animsition/css/animsition.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/select2/select2.min.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/vendor/daterangepicker/daterangepicker.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/css/util.css" />
                    <link rel="stylesheet" type="text/css" href="formtemplate/css/main.css" />
                </head>
                <body>


                    <div class="container-contact100">
                        <div class="wrap-contact100">
                            <form class="contact100-form validate-form">
                                <span class="contact100-form-title">
                                    Tution Details
				</span>


                                <div class="wrap-input100 validate-input" data-validate="Name is required">
                                    <label class="label-input100" for="name">Full name</label>
                                    <input id="name" class="input100" type="text" name="name" placeholder="Enter Student name..." value={this.state.studentnames} onChange = {this.changehandler("studentnames")}/>
                                    <span class="focus-input100"></span>
                                </div>


                                <div class="wrap-input100 " >
                                    <label class="label-input100">Grade</label>
                                    <input id="grade" class="input100" type="text" name="grade" placeholder="Enter Class..."  value={this.state.grades} onChange = {this.changehandler("grades")}/>
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 " >
                                    <label class="label-input100" >Fees</label>
                                    <input id="fee" class="input100" type="text" name="fee" placeholder="Enter Fees..." value={this.state.feess} onChange = {this.changehandler("feess")}/>
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 ">
                                    <label class="label-input100" >Area</label>
                                    <input id="area" class="input100" type="text" name="area" placeholder="Enter Area.." value={this.state.areas} onChange = {this.changehandler("areas")}/>
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100 ">
                                    <label class="label-input100" >Duration</label>
                                    <input id="duration" class="input100" type="text" name="duration" placeholder="Enter Duration time(in months)..." value={this.state.durations} onChange = {this.changehandler("durations")}/>
                                    <span class="focus-input100"></span>
                                </div>

                                <div class="wrap-input100">
                                    <label class="label-input100" >Starting Date</label>
                                    <input id="date" class="input100" type="date" name="date" placeholder="Enter Starting Date..." value={this.state.startingdates} onChange = {this.changehandler("startingdates")}/>
                                    <span class="focus-input100"></span>
                                </div>





                                <div class="container-contact100-form-btn">
                                 <Link to='/tutiondisplay'>   <button class="contact100-form-btn" onClick={this.submithandler}>
                                        Post Tution
					</button>
                    </Link>
                                </div>


                            </form>

                            <div class="contact100-more flex-col-c-m" style={{ backgroundImage: "url('formtemplate/images/bg-01.jpg')" }}>
                            </div>
                        </div>
                    </div>





                    <script src="formtemplate/vendor/jquery/jquery-3.2.1.min.js"></script>
                    <script src="formtemplate/vendor/animsition/js/animsition.min.js"></script>
                    <script src="formtemplate/vendor/bootstrap/js/popper.js"></script>
                    <script src="formtemplate/vendor/bootstrap/js/bootstrap.min.js"></script>
                    <script src="formtemplate/vendor/select2/select2.min.js"></script>
                    <script src="formtemplate/js/something1.js"></script>
                    <script src="formtemplate/vendor/daterangepicker/moment.min.js"></script>
                    <script src="formtemplate/vendor/daterangepicker/daterangepicker.js"></script>
                    <script src="formtemplate/vendor/countdowntime/countdowntime.js"></script>
                    <script src="formtemplate/js/main.js"></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
                    <script src="formtemplate/js/something2.js"></script>
                </body>
            </div>
        )
    }
}


export default tutionform