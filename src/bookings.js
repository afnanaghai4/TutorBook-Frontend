import React, { Component } from "react"
import NavBar from "./navbar.js"
import Footer from "./footer.js"
import Modal from "./Modal.js"
class Bookings extends Component {

    constructor() {
        super()
        const getid = ""
    }

    state = {
        booking: []
    }

    componentDidMount() {
        fetch(`http://localhost:4000/booking`, {
            method: "GET",
            headers: new Headers({ 'Content-Type': 'applications/json', 'authorization': localStorage.getItem('tok') })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    booking: data
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
                {this.state.booking.map(element => {

                    return (
                        <ul style={{ listStyle: "none" }}>
                            <li key={element.tution_id}>{element.studentname}</li>
                            

                            <Modal contactdetails={element.finder} />
                        </ul>
                    )
                })}

                

            </div>

        )
    }
}

export default Bookings