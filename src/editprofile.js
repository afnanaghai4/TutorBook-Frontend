import React, { Component } from "react"
import NavBar from "./navbar.js"
import Footer from "./footer.js"
import { Redirect, Link } from "react-router-dom"
class editProfile extends Component {

  constructor() {
    super()
    this.state = {
      fullname: "",
      email: "",
      password: "",
      user:[]

    }
    this.changehandler = this.changehandler.bind(this);
    this.submithandler = this.submithandler.bind(this);
    
  }
  

  async submithandler(event) {
    event.preventDefault();
    await fetch('http://localhost:4000/editprofile', {
      method: 'put',
      headers: { 'Content-Type': 'application/json', 'accept': "application/json", "authorization": localStorage.getItem('tok') },
      body: JSON.stringify({
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
        qualification: this.state.qualification,
        charge: this.state.charge,
        city: this.state.city,
        area: this.state.area
      })


    }).then(res => res.json()).then((res => localStorage.setItem('tok', res.token)))

    if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok')) {

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

  componentDidMount() {
    fetch(`http://localhost:4000/profiles`, {
        method: 'get',
        headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
    })

        .then(response => response.json())
        .then(data => {
            this.setState({
                user: data
            })

        })

    if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok')) {

    }
    else {
        this.props.history.push('/')
    }

}




  render() {

    return (
      <div>
        <NavBar />
        <div class="container">
          <h1>Edit Profile</h1>
          <hr />
          <br />
          <div class="row">

            <div class="col-md-9 personal-info">

              <h3>Personal info</h3>
              <br />
              {this.state.user.map(arr =>{
                return(
                  
               
              <form class="form-horizontal" role="form" style={{fontSize:14}}>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Full name:</label>
                  <div class="col-lg-8" >
                    <input key={arr.user_id} style={{fontSize:14}} class="form-control" type="text"  defaultValue={arr.fullname} onChange={this.changehandler("fullname")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-lg-3 control-label">Email:</label>
                  <div class="col-lg-8">
                    <input class="form-control" style={{fontSize:14}} type="text" defaultValue={arr.email} onChange={this.changehandler("email")} />
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-md-3 control-label">Password:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} type="password" value={this.state.password} onChange={this.changehandler("password")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Contact:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} type="contact" defaultValue={arr.contact} onChange={this.changehandler("contact")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Qualification:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} defaultValue={arr.qualification} onChange={this.changehandler("qualification")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Charge:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} defaultValue={arr.charge} onChange={this.changehandler("fee")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">City:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} defaultValue={arr.city} onChange={this.changehandler("city")} />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Area:</label>
                  <div class="col-md-8">
                    <input class="form-control" style={{fontSize:14}} defaultValue={arr.area} onChange={this.changehandler("area")} />
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label class="col-md-3 control-label"></label>
                  <div class="col-md-8">
                    <Link to="/profile" style={{fontSize:14}} type="button" class="btn btn-primary" onClick={this.submithandler} >Save Changes </Link>
                    <Link to="/profile"  style={{fontSize:14}} type="reset" class="btn btn-default" value="Cancel">Cancel</Link>
                  </div>
                  
                </div>
              </form>
 
               )
              })}
            </div>
          </div>
        </div>

       

      </div>

    )
  }
}




export default editProfile