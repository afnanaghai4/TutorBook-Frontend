import React, { Component } from "react"
import { Button, Dropdown, Table, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavBar from "./navbaradmin.js"
import SideBar from "./sidebaradmin.js"

class bookingapprove extends Component{
    state={
        details:[]
    }

    componentDidMount() {

        fetch(`http://localhost:4000/bookingapproval/${localStorage.getItem('id')}`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    details: data


                })

            })

            if (localStorage.getItem('tok') &&
            localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('type') == 'admin') {
            this.props.history.push('/bookingapprove/:id')
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


    async submithandler() {
        
        await fetch(`http://localhost:4000/bookingapprove/${localStorage.getItem('id')}`, {
          method: 'put',
          headers: { 'Content-Type': 'application/json', 'accept': "application/json", "authorization": localStorage.getItem('tok') },
          body: JSON.stringify({
            request:this.state.request
          })
    
    
        })
    
      }

      deletebookingid(){
          localStorage.removeItem('id')
      }
    render(){
        return(
            <div>
                <NavBar />
                <SideBar />
                <Table striped bordered hover variant="dark" style={{ marginLeft: 150, maxWidth: 1000 }}>

<thead>
    <tr>
        <th>Studentname</th>
        <th>Fee</th>
        <th>Grade</th>
        <th>Area</th>
        
        
        <th></th>
    </tr>
</thead>



{this.state.details.map(element => {

    return (

        <tbody style={{ fontSize: 12 }}>
            <tr>
                <td key={element.tution_id}>{element.studentname}</td>
                <td>{element.fee}</td>
                <td>{element.grade}</td>
                <td>{element.area}</td>
               <td> <Button onClick={this.submithandler()}>Approve</Button> </td>
               <td> <Link to ='/bookingapproval' className='btn btn-primary' onClick={this.deletebookingid()}>Cancel</Link> </td>
                </tr>

        </tbody>

    )

})}

</Table>
            </div>
        )
    }
}


export default bookingapprove