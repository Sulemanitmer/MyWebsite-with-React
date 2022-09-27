import React from 'react'
import { Col, Row, Button, Container } from "react-bootstrap";

const HomePageText = () => {
    return (
        <Container>
            <Row className= "fw-bold" style={{height:"100%", fontSize: "40px"}}>
                <Row style={{height:"37.25px"}}>
                Solo Excel in
                </Row>
                <Row style={{height:"37.25px"}}>
                Digital Design
                </Row>
                <Row style={{height:"37.25px"}}> 
                Boutique with
                </Row>
                <Row style={{height:"37.25px"}}>
                focus on 
                </Row>
                <Row style={{height:"37.25px"}}>
                Aesthetics
                </Row>
            </Row>
            <Row style={{height:"37.25vh"}}>
                
            </Row>
            <Row className="fw-bold"style={{height:"100%"}}>          
                With many years of experience in Digital
                product development, Solo understand 
                how to create user-friendly and memorable 
                interfaces for the leading world companies.
                Properly and haroniously, we integrate 
                modren technologies into the classical 
                graphic design aesthetics
            </Row>
        </Container>
      
    );
}

export default HomePageText

