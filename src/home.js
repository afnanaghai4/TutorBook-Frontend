import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./navbar.js"
import Footer from "./footer.js"

function Home() {
    return (

        <div>
            <NavBar />

            <Link to="/login">
                <button>login</button>
            </Link>
            <Link to="/signup">
                <button>signup</button>
            </Link>

            <Footer />


        </div>
    )

}


export default Home