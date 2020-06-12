import React, { Component } from "react"
import { Button, Dropdown, Table, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavBar from "./navbaradmin.js"
import SideBar from "./sidebaradmin.js"

class tutionapproval extends Component{
    
    state={
        details:[]
    }

    componentDidMount() {

        fetch(`http://localhost:4000/tutionapproval`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })

            .then(response => response.json())
            .then(data => {
                this.setState({
                    details: data


                })

            })

        if (localStorage.getItem('tok') !== 'undefined' && localStorage.getItem('tok')) {

        }
        else {
            this.props.history.push('/')
        }
    }


    async submithandler(id) {
        
        await fetch(`http://localhost:4000/tutionapproved/${id}`, {
          method: 'put',
          headers: { 'Content-Type': 'application/json', 'accept': "application/json", "authorization": localStorage.getItem('tok') },
          body: JSON.stringify({
            request:this.state.request
          })
    
    
        }).then(window.location.reload())
    
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
                <Button onClick={() => this.submithandler(element.tution_id)}>Approve</Button>
                
               </tr>

        </tbody>

    )

})}

</Table>
            </div>
        )
    }
}


export default tutionapproval