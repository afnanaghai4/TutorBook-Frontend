import React, { Component } from "react"
import styled from "styled-components"


function Footer() {
    return (
        <FooterContainer className="main-footer text-white" style={{backgroundColor:"#333837",position:"absolute", bottom: 0, width:"100%", height:70}}>
            
            <div className="footer-middle" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6" style={{color:"white"  }}>
                            </div>
                    </div>
                    <div className="footer" style={{textAlign:"center"}}>
                            &copy;{new Date().getFullYear()} TUTORBOOK - All Rights Reserved
                        <p className="text-xs-center">
        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}


export default Footer

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
}


`;