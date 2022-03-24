import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
      <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
 
);

export default MyNav;