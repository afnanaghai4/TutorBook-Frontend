import React, { Component } from "react"
import Footer from "./footer.js"
import NavBar from "./navbar.js"
import { Link, Redirect } from "react-router-dom"
import { Button, Dropdown, Table } from "react-bootstrap"
class TutionDetails extends Component {

    constructor() {
        super()
        this.state = {
            tution: [],
        }



        this.submithandler = this.submithandler.bind(this);
        this.cancelhandler = this.cancelhandler.bind(this);

    }


    componentDidMount() {

        fetch(`http://localhost:4000/tutiondetails/${localStorage.getItem('id')}`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    tution: data

                })

            })

        if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok')) {

        }
        else {
            this.props.history.push('/')
        }
    }

    async submithandler(id) {

        await fetch('http://localhost:4000/addbooking', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json", 'authorization': localStorage.getItem('tok') },
            body: JSON.stringify({
                "tution_id": id

            })


        })


    }

    cancelhandler() {
        this.props.history.push("/dashboard")
        localStorage.removeItem('id')
    }


    render() {
        return (
            <div>
                <NavBar />
                <div className="container" style={{ width: 800, height: 320, border: "1px solid black", backgroundColor: "#9889F2", borderRadius: 25 }}>
                    <br />
                    <h3>Tution Details</h3>
                    <hr style={{ borderRadius: 20, backgroundColor: "#514F62" }} />
                    <ul>

                        {this.state.tution.map(element => {

                            return (

                                <ul style={{ fontFamily: "verdana", fontSize: 11, listStyle: "none", fontWeight: "bold" }}>

                                    <li key={element.tution_id}></li>

                                    <li >Student Name: {element.studentname}</li>
                                    <hr />
                                    <li>Grade: {element.grade}</li>
                                    <hr />
                                    <li>Fee:   {element.fee}</li>
                                    <hr />
                                    <li>Area:  {element.area}</li>
                                    <hr />
                                    <li>Start Date:  {element.timing}</li>
                                    <hr />
                                    <li>End Date:  {element.endtiming}</li>
                                    <hr />
                                    <Button variant="danger" style={{ float: "right" }} onClick={this.cancelhandler}>Cancel</Button>
                                    <Link to="/bookings" className="btn btn-primary" style={{ float: "right" }} onClick={() => this.submithandler(element.tution_id)}>Request Demo </Link>
                                </ul>

                            )

                        })}
                    </ul>



                </div>
                <Footer />

            </div>
        )
    }
}

export default TutionDetails