import { Col, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";


const Footer = () =>{
    return (
        <Row className="bg-black" style={{"height": "34px"}}>
            <Col>
                <Row>
                    <Col className="text-end text-white m-1 p-0">
                        <BsGithub/>                 
                    </Col>
                    <Col className="text-start text-white p-0 " style={{"margin-top": "6px"}}>
                        GitHub                
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col className="text-end text-white p-0" style={{"margin-top": "6px"}}>
                        Linkedin               
                    </Col>
                    <Col className="text-start text-white m-1 p-0">
                        <BsLinkedin/>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
    );
}
export default Footer;