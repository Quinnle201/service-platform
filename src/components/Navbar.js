import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar
      expand="lg"
      variant="dark"
      style={{ background: "#522c00ff", paddingTop: "0.2rem", paddingBottom: "0.2rem" }} // smaller container padding
      sticky="top"
    >
      <Container className="navbar-container">
        <BSNavbar.Brand href="/">
          <img
            src="/logo192.png"
            alt="WeClean Logo"
            height="90" // smaller size
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
            <Nav.Link href="tel:+2149401291" className="fw-bold text-warning">
              Call: +1 (214) 940 -1291
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
