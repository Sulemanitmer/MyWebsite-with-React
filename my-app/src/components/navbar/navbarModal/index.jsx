import { useDispatch, useSelector } from "react-redux";
import { updateAppNav, setNavbarShowModal } from "../appNavSlice";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import _ from 'lodash';
import { AiFillDownCircle } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import "../../../App.css"

export default function NavBarModal(props) {

    const dispatch = useDispatch();

    const navbarAppItem = useSelector(store => store.appNav.value);

    const closeNavbarModal = () => {
        setOpen(false); 
        setTimeout(function () {
            dispatch(setNavbarShowModal(false));
        }, 2000);
    }

    const navbarSelection = (navbarItem) => (event) => {
        dispatch(updateAppNav(navbarItem));
        setTimeout(function () {
            closeNavbarModal();
        }, 100);
    }

    const [open, setOpen] = useState(true)
    const [textColor] = useState(navbarAppItem )

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
                            opacity: 0,
                            transform: 'rotate(180deg)'
                        }}
                        animate={{
                            opacity: 1,
                            transition:{
                                delay: 1,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transform: 'rotate(0deg)',
                            transition:{
                                delay:0.5
                            }
                        }}
                        onClick={() => {closeNavbarModal();}}
                        className="modal-header ms-auto border-0 text-white"
                        >
                            <AiFillDownCircle size={50}/>
                        </motion.div>
                        <div className="modal-body text-white">
                            <motion.div
                            initial={{
                                x: -20,
                                "--homeColor": textColor === 'home' ? '#4081c2': 'white',
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
                                "--homeColor": textColor === 'home' ? '#4081c2': 'white',
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            style={{zIndex: "5"}}
                            >
                                <Row style={{marginTop: "30px"}}>
                                    <Col>
                                        <a style={{fontSize: "54px", color: navbarAppItem === 'home' ? '#4081c2': 'var(--homeColor)'}} onClick={navbarSelection("home")}>AboutMe </a>
                                    </Col>
                                    <Col className='p-0 pt-2 mt-1'>
                                        <a style={{fontSize: "12.5px", color: navbarAppItem === 'home' ? '#4081c2': 'var(--homeColor)'}} onClick={navbarSelection("home")}>(Main)</a>
                                    </Col>
                                </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                "--projectsColor": textColor === 'projects' ? '#4081c2': 'white',
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
                                "--projectsColor": textColor === 'projects' ? '#4081c2': 'white',
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            style={{zIndex: "4"}}
                            >
                            <Row style={{marginTop: "130px"}} >
                                <Col>
                                    <a style={{fontSize: "54px", color: navbarAppItem === 'projects' ? '#4081c2': 'var(--projectsColor)'}} onClick={navbarSelection("projects")}>Portfolio</a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px", color: navbarAppItem === 'projects' ? '#4081c2': 'var(--projectsColor)'}} onClick={navbarSelection("projects")}>(Achievement)</a>
                                </Col>
                            </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                "--resumeColor": textColor === 'resume' ? '#4081c2': 'white',
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
                                "--resumeColor": textColor === 'resume' ? '#4081c2': 'white',
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            style={{zIndex: "3"}}
                            >
                            <Row style={{marginTop: "230px"}}>
                                <Col>
                                    <a style={{fontSize: "54px", color: navbarAppItem === 'resume' ? '#4081c2': 'var(--resumeColor)'}} onClick={navbarSelection("resume")}>Services </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px", color: navbarAppItem === 'resume' ? '#4081c2': 'var(--resumeColor)'}} onClick={navbarSelection("resume")}>(Values)</a>
                                </Col>
                            </Row>
                            </motion.div>
                            <motion.div
                            initial={{
                                x: -20,
                                "--contactColor": textColor === 'contact' ? '#4081c2': 'white',
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
                                "--contactColor": textColor === 'contact' ? '#4081c2': 'white',
                                transition:{
                                    duration: 1.5
                                }
                            }}
                            className="overflow-hidden position-fixed w-100"
                            style={{zIndex: "2"}}
                            >
                            <Row style={{marginTop: "330px"}}>
                                <Col>
                                    <a style={{fontSize: "54px", color: navbarAppItem === 'contact' ? '#4081c2': 'var(--contactColor)'}} onClick={navbarSelection("contact")}>Contacts </a>
                                </Col>
                                <Col className='p-0 pt-2 mt-1'>
                                    <a style={{fontSize: "12.5px", color: navbarAppItem === 'contact' ? '#4081c2': 'var(--contactColor)'}} onClick={navbarSelection("contact")}>(Contact Me)</a>
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
                                    <div style={{color: '#4081c2'}}>
                                        While(!(succeed=try()));
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
