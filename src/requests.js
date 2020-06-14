import React, { Component } from "react"
import NavBar from "./navbar3.js"
import {Table,Button} from "react-bootstrap"
import Modal from "./modal1.js"

class requests extends Component {
    constructor() {
        super();
        this.state = {
            approval: []
        }
    }

    componentDidMount() {


        fetch(`http://localhost:4000/tutorapproval`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    approval: data

                })

            })
    }

    getbookingid(id){
        localStorage.setItem('bookingid',id)
    }


    render() {
        return (
            <div>
                <NavBar />
                <div className="container" style={{ fontSize: 12, position: "absolute", top: 150, left: 45, width: 800 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th><h3>Tution Status</h3></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.approval.map(arr => {
                                return (
                                    <tr>
                                        <td key={arr.user_id}>{arr.fullname} and {arr.booking_id}</td>
                                        <td><Button onClick={() => this.getbookingid(arr.booking_id)}><Modal /></Button></td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </Table>

                </div>
                </div>
        )
    }
}

export default requests