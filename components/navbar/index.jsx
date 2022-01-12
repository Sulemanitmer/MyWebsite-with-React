import { useDispatch } from "react-redux";
import { updateAppNav } from "./appNavSlice";

import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {

    const dispatch = useDispatch();
    
    const navSelection = (navItem) => {
        console.log(navItem);
        dispatch(updateAppNav(navItem));
    }

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() =>navSelection("home")}>S0/0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Project" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">overview</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">project2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">project3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">project4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() =>navSelection("resume")}> resume </Nav.Link>
              <Nav.Link onClick={() =>navSelection("contact")}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
    );
}

export default NavBar