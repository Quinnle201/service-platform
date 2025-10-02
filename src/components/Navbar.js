import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar expand="lg" variant="dark" style={{ background: "#522c00ff" }} sticky="top">
      <Container>
        <BSNavbar.Brand href="/">
          <img
            src="/WeClean.logo-bgremoved.png"
            alt="WeClean Logo"
            height="80" // smaller size
            className="d-inline-block align-top"
          />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Cleaning Services</Nav.Link>
            <Nav.Link href="#quote">Get a Quote</Nav.Link>
            <Nav.Link href="#location">Locations</Nav.Link>
            <Nav.Link href="tel:+14694652141" className="fw-bold text-warning">
              Call: +1 (469) 465-2141
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
