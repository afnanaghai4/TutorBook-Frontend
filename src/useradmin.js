import React, { Component } from "react"
import { Button, Dropdown, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavBar from "./navbaradmin.js"
import SideBar from "./sidebaradmin.js"

class UserAdmin extends Component {

    state = {
        user: []
    }

    componentDidMount() {
        fetch(`http://localhost:4000/adminusers`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        }
        )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data
                })
            })

            if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'admin') {
            this.props.history.push('/useradmin')
        }
        else if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'customer') {
            this.props.history.push('/dashboard')
        }
        else {
            return (
               this.props.history.push('/')
            )
        }
    }

    async submithandler(id) {

        await fetch(`http://localhost:4000/users/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
        }).then(window.location.reload())
        

    }



    render() {
        return (
            <div>
                <NavBar />
                <SideBar />
                <div class="container">


                    <Table striped bordered hover variant="dark" style={{ marginLeft: 80, maxWidth: 1000 }}>

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FULLNAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>CONTACT</th>
                                <th>QUALIFICATION</th>
                                <th>CITY</th>
                                <th>AREA</th>
                                <th></th>
                            </tr>
                        </thead>



                        {this.state.user.map(element => {

                            return (

                                <tbody style={{ fontSize: 12 }}>
                                    <tr>
                                        <td key={element.user_id}>{element.user_id}</td>
                                        <td>{element.fullname}</td>
                                        <td>{element.email}</td>
                                        <td>{element.password}</td>
                                        <td>{element.contact}</td>
                                        <td>{element.qualification}</td>
                                        <td>{element.city}</td>
                                        <td>{element.area}</td>
                                        <td>   <Button className="btn btn-primary" style={{ width: "90%",backgroundColor:"#F33C3C" }} onClick={() => this.submithandler(element.user_id)}>DELETE</Button> </td>
                                    </tr>

                                </tbody>

                            )

                        })}

                    </Table>
                </div>

            </div>
        )
    }
}

export default UserAdmin