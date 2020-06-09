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
                <div className="container" style={{ width: 800, height: 420, border: "1px solid black", borderRadius: 25, font:16 }}>
                    <br />
                    <h1>Profile</h1>
                    <hr style={{ borderRadius: 20, backgroundColor: "#514F62" }} />

                    {this.state.user.map(element => {

                        return (
                            <ul style={{ listStyle: "none",font:16 }}>

                                <br />
                                <h5>Name</h5>
                                <li key={element.user_id}>{element.fullname}</li>
                                <hr />

                                <h5 >Email</h5>
                                <li>{element.email}</li>
                                <hr />
                                <h5>Contact</h5>
                                <li>{element.contact}</li>
                                <hr />
                                <h5>Qualification</h5>
                                <li>{element.qualification}</li>
                                <hr />
                                <h5>Area</h5>
                                <li>{element.area}</li>
                                <br />
                                <Link to="/editprofile" className="btn btn-primary" style={{ fontSize:16,padding: "15px 32px",backgroundColor: "#f44336",textAlign: "center", display: "table", margin: "0 auto" }}>edit Profile</Link>

                            </ul>
                        )

                    })}







                </div>
                <Footer />
            </div>
        )
    }
}


export default Profile