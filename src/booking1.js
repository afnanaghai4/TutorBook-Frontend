import React, { Component } from "react"
import { Button, Dropdown, Table, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavBar from "./navbaradmin.js"
import SideBar from "./sidebaradmin.js"

class booking1 extends Component{
    state={
        details:[],
        details2:""
    }
    
    componentDidMount() {

        fetch(`http://localhost:4000/bookingshow/${localStorage.getItem('id')}`, {
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

    deletetheid(){
        localStorage.removeItem("id")
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
        <th>Tutor</th>
        
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
                <td>{element.fullname}</td>
                <td>   <Link to='/bookingadmin' className="btn btn-primary" style={{ width: "60%",backgroundColor:"#F33C3C" }} onClick={this.deletetheid}>Cancel</Link> </td>
            </tr>

        </tbody>

    )

})}

</Table>
            </div>
        )
    }
}


export default booking1