import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './template.js'
import LoginForm from './loginform.js'
import DashBoard from './dashboard.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home.js'
import Modal from "./Modal.js"
import history from "./history.js" 
import editProfile from "./editprofile.js"
import Home1 from "./home1.js"
import Logout from "./logout.js"
import TutionDetails from "./tutionsdetails.js"
import Bookings from "./bookings.js"
import AdminPanel from "./adminpanel.js"
import UserAdmin from "./useradmin.js"
import BookingAdmin from "./bookingadmin.js"
import Booking1 from "./booking1.js"
import TutionApproval from "./tutionaproval.js"
import BookingApproval from "./bookingapproval.js"
import BookingApprove from "./bookingapprove.js"
import DashBoard2 from './dashboard2.js'
import TutorDetails from './tutordetails.js'
import Requests from "./requests.js"
import TutionDisplay from "./tutiondisplay.js"
import TutionForm from "./tutionform.js"
import SignUp from "./signup2.js"

import * as ReactBootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"



import Profile from "./profile.js"
class App extends Component {



  render() {
    return (
      <div>


        <Router>
          

          <Switch>
            <Route path="/" exact component={Home1} />
            <Route path='/login' exact component={LoginForm} />
            <Route path='/signupfinder' exact component={SignUp} />
            <Route path='/signuptutor' exact component={Template} />
            <Route path='/dashboard' exact component={DashBoard} />
            <Route path='/Modal' exact component={Modal} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/editprofile' exact component={editProfile} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/tutiondetails/:id' exact component= {TutionDetails} />
            <Route path='/bookings' exact component={Bookings} />
            <Route path='/adminpanel' exact component={AdminPanel} />
            <Route path='/useradmin' exact component={UserAdmin} />
            <Route path='/bookingadmin' exact component={BookingAdmin} />
            <Route path='/booking1/:id' exact component={Booking1} />
            <Route path='/tutionapproval' exact component={TutionApproval} />
            <Route path='/bookingapproval' exact component={BookingApproval} />
            <Route path='/bookingapprove/:id' exact component={BookingApprove} />
            <Route path='/dashboardfinder' exact component={DashBoard2} />
            <Route path='/tutordetails/:id' exact component={TutorDetails} />
            <Route path='/requests' exact component={Requests} />
            <Route path='/tutiondisplay' exact component={TutionDisplay} />
            <Route path='/tutionform' exact component={TutionForm} />
          </Switch>
          
        </Router>
      </div>
    );

  }
}

export default App;
