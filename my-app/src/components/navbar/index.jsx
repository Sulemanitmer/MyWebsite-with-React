import { useDispatch, useSelector } from "react-redux";
import { updateAppNav, setNavbarShowModal } from "./appNavSlice";
import { Col, Row, Button, Container } from "react-bootstrap";
import _ from 'lodash';
import NavbarModal from "./navbarModal/index";

export default function NavBar() {

    const dispatch = useDispatch();
    
    const navbarShowModalItem = useSelector(store => store.appNav.navbarShowModal)

    const showNavbarModal = () => (event) => {
      dispatch(setNavbarShowModal(true));
    }
    
    return (
      <>
        {navbarShowModalItem === true && <NavbarModal/>}
         <Container className="p-4">
          <Row className="m-0">
            <Col className="p-0 m-0 my-auto">
              <div style={{ position: 'relative', zIndex: '2', pointerEvents: 'none' }}>
                  S0\0
              </div>
            </Col>
            <Col className="p-0 m-0 text-end">
              <Button style={{ position: 'relative', zIndex: '2' }} onClick={showNavbarModal()}>
                Main Menu
              </Button>
            </Col>
          </Row>
        </Container>
      </>
     
    );
}