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

    const fadeType = navbarAppItem.navbarShowModal ? 'fadeIn' : 'fadeOut';
    return (
    <>
    //             <Spring
    //                 delay={200}
    //                 config={{ duration: 1000 }}
    //                 from={{opacity:0}} 
    //                 to={{opacity:0}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props} className="" >
    //                     <Modal 
    //         fullscreen={fullscreen}
    //         show={navbarAppItem.navbarShowModal}
    //     >
        
    //     <Modal.Header  className='border-0 p-4'>
    //       <div className='ms-auto' onClick={closeNavbarModal}>
    //         <AiFillCloseCircle size={50} />
    //       </div>
    //         </Modal.Header>
    //             <Modal.Body>
                
    //             <Spring
    //                 delay={200}
    //                 config={{ duration: 1000 }}
    //                 from={{opacity:1, height:'0px' , x : -20}} 
    //                 to={{opacity:1, height: '100px' , x : 0}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props} className="overflow-hidden position-fixed w-100">
    //                     <Row style={{marginTop: "30px"}}>
    //                         <Col>
    //                             <a style={{fontSize: "54px"}}>AboutMe </a>
    //                         </Col>
    //                         <Col className='p-0 pt-2 mt-1'>
    //                             <a style={{fontSize: "12.5px"}}>(Main)</a>
    //                         </Col>
    //                     </Row>
    //                     </animated.div>
    //                 )}
    //             </Spring>
    //             <Spring
    //                 delay={300}
    //                 config={{ duration: 1000 }}
    //                 from={{opacity:1, height:'100px' , x : -20}} 
    //                 to={{opacity:1, height: '200px', x : 0}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props} className="overflow-hidden position-fixed w-100">
    //                         <Row style={{marginTop: "130px"}}>
    //                             <Col>
    //                                 <a style={{fontSize: "54px"}}>Portfolio </a>
    //                             </Col>
    //                             <Col className='p-0 pt-2 mt-1'>
    //                                 <a style={{fontSize: "12.5px"}}>(Works</a>
    //                             </Col>
    //                         </Row>
    //                     </animated.div>
    //                 )}
    //             </Spring>
    //             <Spring
    //                 delay={400}
    //                 config={{ duration: 1000 }}
    //                 from={{opacity:1, height:'200px', x : -20}} 
    //                 to={{opacity:1, height: '300px', x : 0}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props} className="overflow-hidden position-fixed w-100">
    //                         <Row style={{marginTop: "230px"}}>
    //                             <Col>
    //                                 <a style={{fontSize: "54px"}}>Services </a>
    //                             </Col>
    //                             <Col className='p-0 pt-2 mt-1'>
    //                                 <a style={{fontSize: "12.5px"}}>(Values)</a>
    //                             </Col>
    //                         </Row>
    //                     </animated.div>
    //                 )}
    //             </Spring>
    //             <Spring
    //                 delay={500}
    //                 config={{ duration: 1000 }}
    //                 from={{opacity:1, height:'300px', x : -20}} 
    //                 to={{opacity:1, height: '400px', x : 0}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props} className="overflow-hidden position-fixed w-100">
    //                         <Row style={{marginTop: "330px"}}>
    //                             <Col>
    //                                 <a style={{fontSize: "54px"}}>Contacts </a>
    //                             </Col>
    //                             <Col className='p-0 pt-2 mt-1'>
    //                                 <a style={{fontSize: "12.5px"}}>(Contact Me)</a>
    //                             </Col>
    //                         </Row>
    //                     </animated.div>
    //                 )}
    //             </Spring>
                   
    //         </Modal.Body>
    //         <Modal.Footer className='d-inline justify-content-center pb-4 mb-4 border-0'>
    //         <Spring
    //                 delay={1000}
    //                 config={{ duration: 1500 }}
    //                 from={{opacity:0}} 
    //                 to={{opacity:1}} 
    //             >
    //                 {props => (
    //                     <animated.div style={props}>
    //                         <Row>
    //                             <Col>
    //                                 <div>
    //                                     GitHub
    //                                 </div>
    //                                 <div>
    //                                     Linkedin
    //                                 </div>
    //                                 <div>
    //                                     214-680-7493
    //                                 </div>
    //                             </Col>
                                
    //                             <Col>
    //                                 <div>
    //                                     Business inquiries
    //                                 </div>
    //                                 <div>
    //                                     sulemanitmer@gmail.com
    //                                 </div>
    //                                 <div>
    //                                     Work Smart not hard
    //                                 </div>
    //                             </Col>
    //                         </Row>
    //                     </animated.div>
    //                 )}
    //             </Spring>
                
    //         </Modal.Footer>
    //   </Modal>
    //                     </animated.div>
    //                 )}
    //             </Spring>
       
    </>
    )
}
