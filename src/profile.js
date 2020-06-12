import React, { Component } from "react"
import { waitForElement } from "@testing-library/react"
import NavBar from "./navbar.js"
import Axios from "axios"
import Footer from "./footer.js"
import { Redirect, Link } from "react-router-dom"
import history from "./history.js"
class Profile extends Component {

    state = {
        user: [],
        profilenumber: 11,
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
                <div className="container" style={{ width: 800, height: 490, border: "1px solid black", borderRadius: 25 }}>
                    <br />
                    <h1>Profile</h1>
                    <hr style={{ borderRadius: 20, backgroundColor: "#514F62" }} />

                    {this.state.user.map(element => {

                        return (
                            <ul style={{ listStyle: "none" }}>

                                <br />
                                <h4>Name</h4>
                                <li style={{fontSize:15}} key={element.user_id}>{element.fullname}</li>
                                <hr />

                                <h4>Email</h4>
                                <li style={{fontSize:15}}>{element.email}</li>
                                <hr />
                                <h4>Contact</h4>
                                <li style={{fontSize:15}}>{element.contact}</li>
                                <hr />
                                <h4>Qualification</h4>
                                <li style={{fontSize:15}}>{element.qualification}</li>
                                <hr />
                                <h4>Area</h4>
                                <li style={{fontSize:15}}>{element.area}</li>
                                <br />
                                <Link to="/editprofile" className="btn btn-primary" style={{ fontSize:16,padding: "15px 32px",backgroundColor: "#f44336",textAlign: "center", display: "table", margin: "0 auto" }}>edit Profile</Link>

                            </ul>
                        )

                    })}







                </div>
                
            </div>
        )
    }
}


export default Profile