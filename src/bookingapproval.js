import React, { Component } from "react"
import { Button, Dropdown, Table, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavBar from "./navbaradmin.js"
import SideBar from "./sidebaradmin.js"

class bookingapproval extends Component{
    state={
        booking:[]
    }

    componentDidMount(){
        fetch(`http://localhost:4000/bookingapproval`, {
            method:'get',
            headers:new Headers({'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok')})
        })

        .then(response=>response.json())
        .then(data=>{
            this.setState({
                booking:data
            })
        })
        if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'admin') {
            this.props.history.push('/bookingapproval')
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

    gettutionid(id){
        localStorage.setItem('id',id)
    }
    
    
    render(){
        return(
            <div>
                <NavBar />
                <SideBar />

                <Table striped bordered hover variant="dark" style={{ marginLeft: 150, maxWidth: 1000 }}>

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User_id</th>
                                <th>Tution_id</th>
                                
                                <th></th>
                            </tr>
                        </thead>



                        {this.state.booking.map(element => {

                            return (

                                <tbody style={{ fontSize: 12 }}>
                                    <tr>
                                        <td key={element.booking_id}>{element.booking_id}</td>
                                        <td>{element.user_id}</td>
                                        <td>{element.tution_id}</td>
                                        
                                        <td>   <Link to='/bookingapprove/:id' className="btn btn-primary" style={{ width: "60%" }} onClick={() => this.gettutionid(element.booking_id)}>Details</Link> </td>
                                        
                                    </tr>

                                </tbody>

                            )

                        })}

                    </Table>
            </div>
        )
    }
}


export default bookingapproval