import React, { Component } from "react"
import Modal from "react-modal"
import Modal3 from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"





class modal2 extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
            contact:[]
        }
    const getid = ""
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentDidMount(){
        // {this.props.booking.map(element=>{
        //     return(
        //     this.getid = {element.finder}
        //     )
        // })}
        fetch(`http://localhost:4000/contact/${this.props.contactdetails}`,
        {method:'GET',
        headers: new Headers({'Content-Type':'application/json', 'authorization':localStorage.getItem('tok')})
    })

        .then(response => response.json())
        .then(data=>{
            this.setState({
                contact:data
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
                <Button className="btn btn-primary" style={{ width: "100%",backgroundColor:"#0ABD0F",textAlign:"center" }} onClick={this.showModal}>Contact Details</Button>

                <Modal isOpen={this.state.isActive}
                    onRequestClose={this.state.isActive}>


                    <Modal3.Dialog>
                        <Modal3.Header closeButton >
                            <Modal3.Title>Contact Details</Modal3.Title>
                        </Modal3.Header>

                        <Modal3.Body>
                        {this.state.contact.map(element=>{
                            return(
                            <h6 key={element.user_id}  style={{ fontSize: 12 }}>{element.fullname}: {element.contact}</h6>
                            )
                        })
                        }


                        </Modal3.Body>

                        <Modal3.Footer>
                            <Button variant="secondary" onClick={this.showModal} style={{backgroundColor: "#f44336"}}>Close</Button>
                            
                        </Modal3.Footer>
                    </Modal3.Dialog>

                </Modal>

            </div>

        )
    }
}


export default modal2




