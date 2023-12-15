import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import logo from '../images/artlogo.png';

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{}}>
        <Container>
          <Navbar.Brand href="/about"><img src={logo} style={{width:'30px',height:'30px'}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;