import { useDispatch, useSelector } from "react-redux";
import { updateAppNav } from "./appNavSlice";
import { Col, Row, Button, Container } from "react-bootstrap";
import _ from 'lodash';
import NavbarModal from "./navbarModal/index";

export default function NavBar() {

    const dispatch = useDispatch();
    
    const navbarAppItem = useSelector(store => store.appNav.value)

    const navbarSelection = (navbarItem) => (event) => {
        const navbarApp = _.cloneDeep(navbarAppItem);
        navbarApp.navbarOption = navbarItem;
        dispatch(updateAppNav(navbarApp));
    }

    const showNavbarModal = () => (event) => {
      const navbarApp = _.cloneDeep(navbarAppItem);
      navbarApp.navbarShowModal = true;
      dispatch(updateAppNav(navbarApp));
    }

    return (
      <>
         <Container className="p-4">
          <Row className="m-0">
            <Col className="p-0 m-0 my-auto">
              <div style={{ position: 'relative', zIndex: '2' }}>
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

        <NavbarModal/>

      </>
     
    );
}