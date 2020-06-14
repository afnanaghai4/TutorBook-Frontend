import React,{Component} from "react"
import Home from "./home.js"
import { Redirect } from "react-router-dom"


class Home1 extends Component{
    render(){
        
         if((localStorage.getItem('tok')) && 
        (localStorage.getItem('tok') !== 'undefined') &&
        localStorage.getItem('type') == "customer"){
            return(
                <Redirect to= '/dashboard'/>
            )
        }
        else if((localStorage.getItem('tok')) && 
        (localStorage.getItem('tok') !== 'undefined') &&
        localStorage.getItem('type') == "finder"){
            return(
                <Redirect to= '/dashboardfinder'/>
            )
        }
        else if((localStorage.getItem('tok')) && 
        (localStorage.getItem('tok') !== 'undefined') &&
        localStorage.getItem('type') == "admin"){
            return(
                <Redirect to= '/adminpanel'/>
            )
        }
        else{
            return(
            <Home />
            )
        }
    }
}

export default Home1