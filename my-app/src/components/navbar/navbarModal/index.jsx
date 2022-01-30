import React from 'react'
import appNavSlice from '../appNavSlice';

import { useDispatch, useSelector } from "react-redux";
import { updateAppNav } from "../appNavSlice";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from 'react';
import _ from 'lodash';
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
        <Modal.Header  closeButton className='border-0 p-4'>
          <Modal.Title></Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <Row className='pt-4 mt-2'>
                    <Col>
                        <a style={{fontSize: "50px"}}>AboutMe </a>
                    </Col>
                    <Col className='p-0 pt-2 mt-1'>
                        <a style={{fontSize: "12.5px"}}>(Main)</a>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col>
                        <a style={{fontSize: "50px"}}>Portfolio </a> 
                    </Col>
                    <Col className='p-0 pt-2 mt-1'>
                        <a style={{fontSize: "12.5px"}}>(Works)</a>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col>
                        <a style={{fontSize: "50px"}}>Services </a> 
                    </Col>
                    <Col className='p-0 pt-2 mt-1'>
                        <a style={{fontSize: "12.5px"}}>(Values)</a>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col>
                        <a style={{fontSize: "50px"}}>Contacts </a>
                    </Col>
                    <Col className='p-0 pt-2 mt-1'>
                        <a style={{fontSize: "12.5px"}}>(Contact Me)</a>
                    </Col>
                </Row>
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
