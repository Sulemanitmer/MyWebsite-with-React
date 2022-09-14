import { useDispatch, useSelector } from "react-redux";
import { updateAppNav, setNavbarShowModal } from "./appNavSlice";
import { Col, Row, Button, Container } from "react-bootstrap";
import _ from 'lodash';
import NavbarModal from "./navbarModal/index";
import { AiFillDownCircle } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function NavBar() {

    const dispatch = useDispatch();
    
    const navbarShowModalItem = useSelector(store => store.appNav.navbarShowModal)

    const showNavbarModal = () => {
      setOpen(false); 
      setTimeout(function () {
          dispatch(setNavbarShowModal(true));
          setOpen(true);
      }, 1000);
      
  }
    
    const [open, setOpen] = useState(true)

    return (
      <>
        {navbarShowModalItem === true && <NavbarModal/>}
         <Container className="p-3">
          <Row className="m-0">
            <Col className="p-3 m-0 my-auto fw-bold">
              <div style={{ position: 'relative', zIndex: '2', pointerEvents: 'none' }}>
                  S0\0
              </div>
            </Col>
            <Col className="p-0 m-0 ms-auto">
              <AnimatePresence>
                {open && (
                  <>
                    <motion.div 
                    initial={{
                        opacity: 0,
                        transform: 'rotate(0deg)'
                    }}
                    animate={{
                        opacity: 1,
                        transform: 'rotate(0deg)',
                        transition:{
                            delay: 1,
                        }
                    }}
                    exit={{
                        opacity: 0,
                        transform: 'rotate(180deg)',
                        transition:{
                            delay:0.5
                        }
                    }}
                    onClick={() => {showNavbarModal()}}
                    className="text-black position-fixed text-end p-3"
                    style={{top: '0', right: '0'}}
                    >
                      <AiFillDownCircle size={50} style={{ zIndex: '2' }}/>
                    </motion.div>
                  </>
                  )}
              </AnimatePresence>
            </Col>
          </Row>
        </Container>
      </>
     
    );
}