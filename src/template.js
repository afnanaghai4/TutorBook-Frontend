import React, {Component} from "react"
import Home from "./home.js"
import { Redirect,Link } from "react-router-dom"
class Template extends Component{
    
    constructor(){
        super()
        this.state = {
            fullname: "",
            email: "",
            password:"",
            qualification: "",
            area:"",
            contact:"",
            role_id:""
        }
        this.changehandler = this.changehandler.bind(this);
        this.submithandler = this.submithandler.bind(this);
    }


    submithandler(){
        fetch('http://localhost:4000/signup',{
            method: 'post',
            headers: {'Content-Type': 'application/json', 'accept': "application/json"},
            body: JSON.stringify({
                "fullname":this.state.fullname,
                "email":this.state.email,
                "password":this.state.password,
                "qualification":this.state.qualification,
                "area":this.state.area,
                "contact": this.state.contact,
                "role_id":this.state.role_id
            })
        })
    }

    changehandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
        }
    
    
    
    render(){

        if((!localStorage.getItem('tok')) || (localStorage.getItem('tok') == 'undefined')){
                
        }
        else if((localStorage.getItem('tok')) || (localStorage.getItem('tok') !== 'undefined')){
            return(
                <Redirect to= '/'/>
            )
        }
        return(
            
            <div>
                
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Sign Up Form by Colorlib</title>
        
            
            <link rel="stylesheet" href="template/fonts/material-icon/css/material-design-iconic-font.min.css" />
        
            
            <link rel="stylesheet" href="template/css/style.css" />
        </head>
        <body>
        
            <div class="main">
        
                <section class="signup">
                   
                    <div class="container">
                        <div class="signup-content">
                            <form  id="signup-form" class="signup-form">
                                <h2 class="form-title">Create account</h2>
                                
                                <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Your Name" value={this.state.fullname} onChange = {this.changehandler("fullname")}/>
                                </div>
                                
                                <div class="form-group">
                                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email" value= {this.state.email} onChange = {this.changehandler("email")}/>
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-input" name="password" id="password" placeholder="Password" value= {this.state.password} onChange = {this.changehandler("password")}/>
                                    <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-input" name="qualification" id="qualification" placeholder="Your qualification" value = {this.state.qualification} onChange = {this.changehandler("qualification")}/>
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-input" name="area" id="area" placeholder="Your area" value = {this.state.area} onChange = {this.changehandler("area")}/>
                                </div>
                                
                                <div class="form-group">
                                    <input type="tel" class="form-input" name="phoneno" id="phoneno" placeholder="Your contact" value = {this.state.contact} onChange = {this.changehandler("contact")}/>
                                </div>
                                
                                <div class="form-group">
                                    <input type="number" class="form-input" name="category" id="category" placeholder="Your category" value = {this.state.role_id} onChange = {this.changehandler("role_id")}/>
                                </div> 
                                
                                
                                <div class="form-group">
                                    <Link to='/login' className="btn btn-primary" onClick = {this.submithandler}>submit</Link>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </section>
        
            </div>
        
           
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="js/main.js"></script>
        </body>
        
        </div>
        )
    }
}

export default Template