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



class DashBoard extends Component {

    constructor() {
        super()
        this.gettutionid = this.gettutionid.bind(this);
        const getid = "";
    }

    state = {

        tution: [],
        isActive: false

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

    componentWillMount() {
        Modal.setAppElement('body');
    }

    showmodal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }


    gettutionid(id) {

        localStorage.setItem("id", id);

    }



    render() {



        return (


            <div>
                <NavBar />
                <body>
                </body>


                <br />


                <div class="container">


                    <Table striped bordered hover variant="dark">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>grade</th>
                                <th>fee</th>
                                <th>area</th>
                                <th></th>
                            </tr>
                        </thead>



                        {this.state.tution.map(element => {

                            return (

                                <tbody style={{ fontSize: 12 }}>
                                    <tr>
                                        <td key={element.tution_id}>{element.tution_id}</td>
                                        <td>{element.grade}</td>
                                        <td>{element.fee}</td>
                                        <td>{element.area}</td>
                                        <td>   <Link to="/tutiondetails/:id" className="btn btn-primary" style={{ width: "40%" }} onClick={() => this.gettutionid(element.tution_id)} >Details</Link> </td>
                                    </tr>

                                </tbody>

                            )

                        })}

                    </Table>
                </div>





                {/* Modal Part */}
                <Modal isOpen={this.state.isActive}
                    onRequestClose={this.state.isActive}>

                    <Modal3.Dialog>
                        <Modal3.Header>

                            <Modal3.Title>Request Demo</Modal3.Title>
                        </Modal3.Header>

                        <Modal3.Body>
                            <p>Do you want to request demo for this tution</p>
                        </Modal3.Body>

                        <Modal3.Footer>
                            <Button variant="danger" onClick={this.showmodal}>Cancel</Button>
                            <Button variant="success" onClick={this.showmodal}>Request Demo</Button>
                        </Modal3.Footer>
                    </Modal3.Dialog>
                </Modal>





                <Footer />
            </div>
        )
    }
}


export default DashBoard