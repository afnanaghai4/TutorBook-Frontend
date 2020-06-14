import React, { Component } from "react"
import Footer from "./footer.js"
import NavBar from "./navbar3.js"
import { Link, Redirect } from "react-router-dom"
import { Button, Dropdown, Table } from "react-bootstrap"


class TutorDetails extends Component {

    constructor() {
        super()
        this.state = {
            tutor: [],
        }



       
        this.cancelhandler = this.cancelhandler.bind(this);

    }


    componentDidMount() {

        fetch(`http://localhost:4000/tutordetails/${localStorage.getItem('id')}`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    tutor: data

                })

            })

        if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok')) {

        }
        else {
            this.props.history.push('/')
        }
    }

    

    cancelhandler() {
        this.props.history.push("/dashboardfinder")
        localStorage.removeItem('id')
    }


    render() {
        return (
            <div>
                <NavBar />
                <div className="container" style={{ width: 800, height: 390, border: "1px solid black", backgroundColor: "#9889F2", borderRadius: 20 }}>
                    <br />
                    <h2>Tution Details</h2>
                    <hr style={{ borderRadius: 20, backgroundColor: "#514F62" }} />
                    

                        {this.state.tutor.map(element => {

                            return (

                                <ul style={{ fontSize: 15, listStyle: "none",fontWeight:"bold" }}>

                                    <li key={element.tution_id}></li>

                                    <li >Student Name: {element.fullname}</li>
                                    <hr />
                                    <li>Email: {element.email}</li>
                                    <hr />
                                    <li>Contact:   {element.contact}</li>
                                    <hr />
                                    <li>Area:  {element.area}</li>
                                    <hr />
                                    <li>Qualification:  {element.qualification}</li>
                                    <hr />
                                    
                                    <br/>
                                    <Button variant="danger" style={{ float: "right",fontSize:13 }} onClick={this.cancelhandler}>Cancel</Button>
                                    </ul>

                            )

                        })}
                    



                </div>
                

            </div>
        )
    }
}

export default TutorDetails