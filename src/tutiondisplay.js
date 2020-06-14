import React, { Component } from "react"
import NavBar from "./navbar3.js"
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

class tutiondisplay extends Component {

    constructor() {
        super()
        this.state = {
            tution1: [],
            tution2: []
        }
    }

    async componentDidMount() {
        console.log("1st api")

        await fetch(`http://localhost:4000/tutiondisplay1`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    tution1: data

                })

            })

        await fetch(`http://localhost:4000/tutiondisplay2`, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    tution2: data

                })

            })



        if (localStorage.getItem('tok') !== 'undefined' &&
            localStorage.getItem('tok') &&
            localStorage.getItem('type') == 'finder') {

        }
        else {
            this.props.history.push('/')
        }
    }


    render() {
        return (
            <div>
                <NavBar />
                <Link to='/tutionform'><Button className="btn-success" style={{ fontSize: 15, fontWeight: "bold", position: "absolute", right: 150, width: 130, height: 40 }}><span className="glyphicon glyphicon-plus"></span>NEW TUTION</Button></Link>
                
               
            <div className="container" style={{fontSize:12,position:"absolute",top:150,left:45,width:800}}>
                <Table striped bordered hover>
  <thead>
    <tr>
      
      <th><h3>Tution Status</h3></th>
      
    </tr>
  </thead>
  <tbody>
    
     {this.state.tution1.map(arr=>{
         return(
        <tr>
            <td key={arr.tution_id}>Your request for posting tution with tution id: <span style={{fontWeight:"bold"}}>{arr.tution_id}</span> and student name: <span style={{fontWeight:"bold"}}>{arr.studentname}</span> has been approved and is now displayed to the tutors</td>
        </tr>
         )
     })}

{this.state.tution2.map(arr=>{
         return(
        <tr>
            <td key={arr.tution_id}>Your request for posting tution with tution id: <span style={{fontWeight:"bold"}}>{arr.tution_id}</span> and student name: <span style={{fontWeight:"bold"}}>{arr.studentname}</span> is pending and waiting for approval.</td>
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

export default tutiondisplay