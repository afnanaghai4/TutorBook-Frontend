import React, { Component } from "react"
import NavBar from "./navbar.js"
import Footer from "./footer.js"
import Modal from "./Modal.js"
import {Table} from "react-bootstrap"
class Bookings extends Component {

    constructor() {
        super()
        const getid = ""
    }

    state = {
        booking1: [],
        booking2: []
    }

    componentDidMount() {
        fetch(`http://localhost:4000/booking1`, {
            method: "GET",
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    booking1: data
                })
            })

            fetch(`http://localhost:4000/booking2`, {
                method: "GET",
                headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        booking2: data
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
                <div className="container" style={{fontSize:12,position:"absolute",top:150,left:45,width:800}}>
                <Table striped bordered hover>
  <thead>
    <tr>
      
      <th><h3>Booking Status</h3></th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
    
     {this.state.booking1.map(arr=>{
         return(
        <tr>
            <td key={arr.tution_id}>Your request for demo for tution with tution id: <span style={{fontWeight:"bold"}}>{arr.tution_id}</span> and student name: <span style={{fontWeight:"bold"}}>{arr.studentname}</span> has been approved.Please contact finder for appointment.</td>
            <td><Modal contactdetails={arr.finder} /></td>
        </tr>
         )
     })}

{this.state.booking2.map(arr=>{
         return(
        <tr>
            <td key={arr.tution_id}>Your request for demo for tution with tution id: <span style={{fontWeight:"bold"}}>{arr.tution_id}</span> and student name: <span style={{fontWeight:"bold"}}>{arr.studentname}</span> is pending and waiting for approval from the finder.</td>
            <td></td>
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

export default Bookings