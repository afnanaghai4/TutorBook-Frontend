import React,{component, Component} from 'react'

class Logout extends Component{
    constructor(){
        super();
        this.clickhandler = this.clickhandler.bind(this)
    }

    clickhandler(){
        localStorage.removeItem('tok')
        this.props.history.push('/')
    }
    render(){
        return(
            <button type = 'btn btn-primary' variant="danger" onClick={this.clickhandler}>Logout</button>        
        )
    }
}



export default Logout