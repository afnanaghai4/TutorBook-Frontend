import React, { Component } from "react"
import {Carousel} from "react-bootstrap"
import image1 from "./homepage1.jpg"
import image2 from "./homepage2.jpg"
import image3 from "./homepage4.jpg"
import './carousal.css'
import {Link} from "react-router-dom"
class carousal extends Component{
    
  

  render(){
        return(
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Link to='signupfinder'  className="btn btn-warning" style={{backgroundColor:"#DC8126",color:"white",fontSize:16,width:150,height:35}}>Sign Up as Finder<span className="glyphicon glyphicon-chevron-right"></span></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to='signuptutor'  className="btn btn-primary" style={{color:"white",fontSize:16,width:150,height:35}}>Sign Up as Tutor<span className="glyphicon glyphicon-chevron-right"></span></Link>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default carousal