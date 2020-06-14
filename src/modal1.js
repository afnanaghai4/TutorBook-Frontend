import React, { Component } from "react"
import Modal from "react-modal"
import Modal3 from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"





class modal1 extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        
        }
  
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    async submithandler() {

        await fetch(`http://localhost:4000/approvebooking/${localStorage.getItem('bookingid')}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json", 'authorization': localStorage.getItem('tok') },
            body: JSON.stringify({
                

            })


        })


    }

    showModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }


    render() {
        return (
            <div>
                <Button className="btn btn-primary" style={{ width: "90%",textAlign:"center" }} onClick={this.showModal}>Approve</Button>

                <Modal isOpen={this.state.isActive}
                    onRequestClose={this.state.isActive}>


                    <Modal3.Dialog>
                        <Modal3.Header closeButton >
                            <Modal3.Title>Approve</Modal3.Title>
                        </Modal3.Header>

                        <Modal3.Body>
                        

                        </Modal3.Body>

                        <Modal3.Footer>
                            <Button variant="danger" onClick={this.showModal} style={{backgroundColor: "#f44336"}}>Close</Button>
                            <Button variant="success" onClick={this.submithandler} style={{backgroundColor: "#f44336"}}>Confirm</Button>
                            
                        </Modal3.Footer>
                    </Modal3.Dialog>

                </Modal>

            </div>

        )
    }
}


export default modal1