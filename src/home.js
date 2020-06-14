import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./navbar2.js"
import Footer from "./footer.js"
import Carousel from "./carousal.js"

function Home() {
    return (

        <div>
            <NavBar />

            
            
           
            <Carousel />

        </div>
    )

}


export default Home