import React from 'react'
import appNavSlice from '../appNavSlice';

import { useDispatch, useSelector } from "react-redux";
import { updateAppNav } from "../appNavSlice";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from 'react';
import _ from 'lodash';
import { AiFillCloseCircle } from "react-icons/ai";

import { motion, AnimatePresence } from 'framer-motion';
import "../../../App.css"
import { propTypes } from 'react-bootstrap/esm/Image';

export default function NavBarModal(props) {

    const dispatch = useDispatch();

    const navbarAppItem = useSelector(store => store.appNav.value);

    const closeNavbarModal = () => {
        setTimeout(function () {
            const navbarApp = _.cloneDeep(navbarAppItem);
        navbarApp.navbarShowModal = false;
        dispatch(updateAppNav(navbarApp));
        }, 2000);
       
    }

    const [open, setOpen] = useState(true)
    return (
    <AnimatePresence>
        {open && (
            <>
                <motion.div 
                initial={{
                    y: "-100vh"
                }}
                animate={{
                    y: 0,
                    transition:{
                        duration: 1
                    }
                }}
                exit={{
                    y: "-100vh",
                    transition:{
                        delay: 0.75,
                        duration: 1
                    }
                }}
                className="modal-content-wrapper border-0 w-100 h-100 bg-black position-fixed"
                style={{zIndex: '9' }}>
                    <div className="modal-content w-100 h-100 bg-black"> 
                        <motion.div 
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition:{
                                delay: 1,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition:{
                                delay:0.5
                            }
                        }}
                        onClick={() => { setOpen(false); closeNavbarModal();}}
                        className="modal-header ms-auto border-0 text-white"
                        >
                            <AiFillCloseCircle size={50}/>
                        </motion.div>
                        <div className="modal-body text-white">
                            <motion.div
                            initial={{
                                x: -20,
                                height: "0px"
                            }}
                            animate={{
                                x: 0,
                                height: "100px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            exit={{
                                x: -20,
                                height: "0px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            >
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <a style={{fontSize: "54px"}}>AboutMe </a>
                                    </Col>
                                    <Col className='p-0 pt-2 mt-1'>
                                        <a style={{fontSize: "12.5px"}}>(Main)</a>
                                    </Col>
                                </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                height: "75px"
                            }}
                            animate={{
                                x: 0,
                                height: "200px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            exit={{
                                x: -20,
                                height: "75px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            >
                            <Row style={{marginTop: "130px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Portfolio</a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Achievement)</a>
                                </Col>
                            </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                height: "175px"
                            }}
                            animate={{
                                x: 0,
                                height: "300px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            exit={{
                                x: -20,
                                height: "175px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            >
                            <Row style={{marginTop: "230px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Services </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Values)</a>
                                </Col>
                            </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                height: "275px"
                            }}
                            animate={{
                                x: 0,
                                height: "400px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            exit={{
                                x: -20,
                                height: "275px",
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            >
                            <Row style={{marginTop: "330px"}}>
                                <Col>
                                    <a style={{fontSize: "54px"}}>Contacts </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px"}}>(Contact Me)</a>
                                </Col>
                            </Row>
                            </motion.div>
                        </div>
                        <motion.div 
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition:{
                                delay: 1,
                                duration: 1.5
                            }
                        }}
                        exit={{
                            opacity: 0
                        }}
                        className="modal-footer border-0 text-white"
                        >
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
                                        SulemanItmer@gmail.com
                                    </div>
                                    <div>
                                        Work Smart not hard
                                    </div>
                                </Col>
                            </Row>
                        </motion.div>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
    )
}
