import React from 'react'
import appNavSlice from '../appNavSlice';

import { useDispatch, useSelector } from "react-redux";
import { updateAppNav } from "../appNavSlice";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from 'react';
import _ from 'lodash';
import { AiFillCloseCircle } from "react-icons/ai";

import { Spring, animated } from 'react-spring'

export default function NavBarModal() {

    const dispatch = useDispatch();

    const navbarAppItem = useSelector(store => store.appNav.value);
    const [fullscreen] = useState(true);

    const closeNavbarModal = () => {
        const navbarApp = _.cloneDeep(navbarAppItem);
        navbarApp.navbarShowModal = false;
        dispatch(updateAppNav(navbarApp));
    }

    return (
    <>
        <Modal 
            fullscreen={fullscreen}
            show={navbarAppItem.navbarShowModal}
            onHide={closeNavbarModal}
            dialogClassName="custom-modal"
            bsClass="my-modal"
        >
        
        <Modal.Header  className='border-0 p-4'>
          <div className='ms-auto' onClick={closeNavbarModal}>
            <AiFillCloseCircle size={50} />
          </div>
            </Modal.Header>
                <Modal.Body>
                
                <Spring
                    from={{opacity:1, height:'0px'}} 
                    to={{opacity:1, height: '100px'}} 
                >
                    {props => (
                        <animated.div style={props} className="overflow-hidden position-fixed w-100">
                        <Row style={{marginTop: "30px"}}>
                            <Col>
                                <a style={{fontSize: "54px"}}>AboutMe </a>
                            </Col>
                            <Col className='p-0 pt-2 mt-1'>
                                <a style={{fontSize: "12.5px"}}>(Main)</a>
                            </Col>
                        </Row>
                        </animated.div>
                    )}
                </Spring>
                <Spring
                    config={{ duration: 5000 }}
                    from={{opacity:1, height:'100px'}} 
                    to={{opacity:1, height: '200px'}} 
                >
                    {props => (
                        <animated.div style={props} className="overflow-hidden position-fixed w-100">
                            <Row style={{marginTop: "130px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Portfolio </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Works</a>
                                </Col>
                            </Row>
                        </animated.div>
                    )}
                </Spring>
                <Spring
                    config={{ duration: 5000 }}
                    from={{opacity:1, height:'200px'}} 
                    to={{opacity:1, height: '300px'}} 
                >
                    {props => (
                        <animated.div style={props} className="overflow-hidden position-fixed w-100">
                            <Row style={{marginTop: "230px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Services </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Values)</a>
                                </Col>
                            </Row>
                        </animated.div>
                    )}
                </Spring>
                <Spring
                    config={{ duration: 5000 }}
                    from={{opacity:1, height:'300px'}} 
                    to={{opacity:1, height: '400px'}} 
                >
                    {props => (
                        <animated.div style={props} className="overflow-hidden position-fixed w-100">
                            <Row style={{marginTop: "330px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Contacts </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Contact Me)</a>
                                </Col>
                            </Row>
                        </animated.div>
                    )}
                </Spring>
                   
            </Modal.Body>
            <Modal.Footer className='d-inline justify-content-center pb-4 mb-4 border-0'>
                <Row>
                    <Col>
                        <div>
                            GitHub
                        </div>
                        <div>
                            Linkedin
                        </div>
                        <div>
                            214-680-7493
                        </div>
                    </Col>
                    
                    <Col>
                        <div>
                            Business inquiries
                        </div>
                        <div>
                            sulemanitmer@gmail.com
                        </div>
                        <div>
                            Work Smart not hard
                        </div>
                    </Col>
                </Row>
            </Modal.Footer>
      </Modal>
    </>
    )
}
