import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Carousel,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import logo2 from "../assets/logo2.png";
import hero1 from "../assets/professional-cleaning-service-people-working-together-office.jpg";
import hero2 from "../assets/desktop-wallpaper-floor-cleaning-tips-for-covid-19-carpets-hardwood-vinyl-flooring-cleaning-service.jpg";
import hero3 from "../assets/still-life-office-cleaning-process.jpg";
import homeImg from "../assets/Professional-House-Cleaning-Services-in-North-Ogden-Utah.jpg";
import carpetImg from "../assets/Deep-cleaning-carpet-1.jpg";
import windowImg from "../assets/5-Cleaning-Tips-to-Make-Your-Windows-Sparkle-This-Spring-Featured.jpeg.jpeg";
import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";
import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";

export default function Home() {
  const [quote, setQuote] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const heroImages = [hero1, hero2, hero3];
  const services = [
    {
      title: "Home Cleaning",
      description: "Full house cleaning service",
      img: homeImg,
    },
    {
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning",
      img: carpetImg,
    },
    {
      title: "Window Cleaning",
      description: "Sparkling clean windows",
      img: windowImg,
    },
  ];
  const galleryImages = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
  ];

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/inquiries", quote);
      alert("Quote request sent!");
      setQuote({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending quote request.");
    }
  };

  return (
    <>
      <Navbar />
      {/* Hero Carousel */}
      <Carousel
        id="home"
        fade
        controls
        indicators
        interval={3000}
        pause="hover"
      >
        {heroImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 hero-img"
              src={img}
              alt={`Slide ${idx}`}
            />
            <Carousel.Caption>
              <h1 className="fw-bold text-warning animate__animated animate__fadeInDown">
                Professional Cleaning Services
              </h1>
              <p className="text-white animate__animated animate__fadeInUp">
                Reliable, Affordable, Sparkling Clean
              </p>
              <Button
                href="#quote"
                variant="warning"
                className="me-2 shadow-sm"
              >
                Get Quote
              </Button>
              <Button
                href="#services"
                variant="outline-light"
                className="shadow-sm"
              >
                View Services
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container id="services" className="mt-5">
        {/* Services Section */}
        <h2 className="text-center mb-4" style={{ color: "#8B4513" }}>
          Our Services
        </h2>
        <Row>
          {services.map((s, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 card-hover">
                <Card.Img
                  variant="top"
                  src={s.img}
                  className="card-img-hover"
                />
                <Card.Body>
                  <Card.Title style={{ color: "#d17e1f" }}>
                    {s.title}
                  </Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                  <Button
                    style={{ backgroundColor: "#8B4513", border: "none" }}
                    className="w-100"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Gallery Carousel */}
        <h2 className="text-center mt-5 mb-4" style={{ color: "#8B4513" }}>
          Before & After
        </h2>
        <Carousel
          fade
          interval={3000}
          pause="hover"
          className="before-after-carousel"
        >
          {galleryImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                <div className="carousel-img-wrapper">
                  <img
                    src={img.before}
                    className="carousel-img"
                    alt={`Before ${idx}`}
                  />
                  <p className="text-center mt-2 mb-0">Before</p>
                </div>
                <div className="carousel-img-wrapper">
                  <img
                    src={img.after}
                    className="carousel-img"
                    alt={`After ${idx}`}
                  />
                  <p className="text-center mt-2 mb-0">After</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Lightbox */}
        <Modal
          show={lightboxOpen}
          onHide={() => setLightboxOpen(false)}
          size="lg"
          centered
        >
          <Modal.Body>
            <Row>
              <Col>
                <h5 className="text-center">Before</h5>
              </Col>
              <Col>
                <h5 className="text-center">After</h5>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setLightboxOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Get Quote Section */}
        <Container id="quote" className="mt-5 mb-5">
          <Row
            className="align-items-center shadow-sm p-4 rounded"
            style={{ backgroundColor: "#FFF8DC" }}
          >
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={logo2}
                alt="Logo"
                className="mb-3"
                style={{ width: "120px" }}
              />
              <h2 style={{ color: "#8B4513" }}>Want a Sparkling Clean Home?</h2>
              <p style={{ color: "#556B2F" }}>
                Let's get started today! Fill out the form and our experts will
                provide a free estimate. Reliable, fast, and affordable!
              </p>
            </Col>
            <Col md={6}>
              <Form
                onSubmit={handleQuoteSubmit}
                className="p-4 rounded bg-white shadow-sm"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={quote.name}
                    required
                    onChange={(e) =>
                      setQuote({ ...quote, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={quote.email}
                    required
                    onChange={(e) =>
                      setQuote({ ...quote, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={quote.phone}
                    required
                    onChange={(e) =>
                      setQuote({ ...quote, phone: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Service</Form.Label>
                  <Form.Select
                    value={quote.service}
                    onChange={(e) =>
                      setQuote({ ...quote, service: e.target.value })
                    }
                  >
                    <option value="">Select Service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={quote.message}
                    required
                    onChange={(e) =>
                      setQuote({ ...quote, message: e.target.value })
                    }
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#d17e1f", border: "none" }}
                  className="w-100 shadow-sm"
                >
                  Request Quote
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        {/* Location */}
        <Container id="location" className="mb-5 text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#8B4513" }}>
            📍 Our Location
          </h2>
          <p style={{ color: "#556B2F", fontSize: "1.1rem" }}>
            Visit us at our office or contact us for a free consultation.
          </p>

          <Row className="align-items-center mt-4">
            <Col md={6} className="mb-4 mb-md-0">
              <div
                className="p-4 rounded shadow-sm"
                style={{ backgroundColor: "#FFF8DC" }}
              >
                <h5 className="fw-bold text-dark">WeClean Office</h5>
                <p>
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>675
                  Town Square Blvd, Suite 200, Garland, TX
                </p>
                <p>
                  <i className="bi bi-envelope-fill text-warning me-2"></i>
                  <a
                    href="mailto:info@alimaid.com"
                    className="text-dark text-decoration-none"
                  >
                    info@alimaid.com
                  </a>
                </p>
                <p>
                  <i className="bi bi-telephone-fill text-warning me-2"></i>
                  <a
                    href="tel:+14694652141"
                    className="text-dark text-decoration-none"
                  >
                    +1 (469) 465-2141
                  </a>
                </p>
              </div>
            </Col>
            <Col md={6}>
              <iframe
                title="WeClean Location"
                src="https://www.google.com/maps?q=675+Town+Square+Blvd,+Garland,+TX&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer
          style={{ background: "#522c00ff", color: "white", padding: "40px 0" }}
        >
          <Container>
            <Row className="text-center text-md-start">
              {/* Company Info */}
              <Col md={4} className="mb-4">
                <h4 className="fw-bold text-warning">WeClean</h4>
                <p>
                  Professional cleaning services for your home and office.
                  Affordable, reliable, and sparkling clean every time.
                </p>
              </Col>

              {/* Contact Info with Icons */}
              <Col md={4} className="mb-4">
                <h5 className="fw-bold text-warning">Contact Us</h5>
                <p>
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                  675 Town Square Blvd, Suite 200, Garland, TX
                </p>
                <p>
                  <i className="bi bi-telephone-fill text-warning me-2"></i>
                  <a
                    href="tel:+14694652141"
                    className="text-white text-decoration-none"
                  >
                    +1 (469) 465-2141
                  </a>
                </p>
                <p>
                  <i className="bi bi-envelope-fill text-warning me-2"></i>
                  <a
                    href="mailto:info@alimaid.com"
                    className="text-white text-decoration-none"
                  >
                    info@alimaid.com
                  </a>
                </p>
              </Col>

              {/* Social Media */}
              <Col md={4} className="mb-4">
                <h5 className="fw-bold text-warning">Follow Us</h5>
                <div>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3 fs-4"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3 fs-4"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </Col>
            </Row>

            <hr className="border-light" />
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} WeClean. All rights reserved.
            </p>
          </Container>
        </footer>
      </Container>
    </>
  );
}
