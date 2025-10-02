import { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Carousel } from "react-bootstrap";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/inquiries", form);
      alert("Inquiry sent!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending inquiry.");
    }
  };

  const services = [
    { title: "Home Cleaning", description: "Full house cleaning service", img: "https://source.unsplash.com/400x300/?cleaning,home" },
    { title: "Carpet Cleaning", description: "Deep carpet cleaning and stain removal", img: "https://source.unsplash.com/400x300/?carpet,cleaning" },
    { title: "Window Cleaning", description: "Sparkling clean windows", img: "https://source.unsplash.com/400x300/?window,cleaning" }
  ];

  const heroImages = [
    "https://source.unsplash.com/1200x400/?cleaning,house",
    "https://source.unsplash.com/1200x400/?cleaning,room",
    "https://source.unsplash.com/1200x400/?cleaning,work"
  ];

  return (
    <>
      {/* Hero Carousel */}
      <Carousel fade>
        {heroImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={img} alt={`Slide ${idx}`} />
            <Carousel.Caption>
              <h1 className="fw-bold">Professional Cleaning Services</h1>
              <p>Making your home sparkling clean every day!</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5">
        <h2 className="text-center mb-4" style={{color:"#4B0082"}}>Our Services</h2>
        <Row>
          {services.map((s, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={s.img} />
                <Card.Body>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="text-center mt-5 mb-4" style={{color:"#4B0082"}}>Contact Us</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-white">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={form.name} required
                  onChange={e => setForm({...form, name: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={form.email} required
                  onChange={e => setForm({...form, email: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={form.phone} required
                  onChange={e => setForm({...form, phone: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} value={form.message} required
                  onChange={e => setForm({...form, message: e.target.value})} />
              </Form.Group>

              <Button type="submit" className="w-100" style={{background:"#4B0082", border:"none"}}>Send Inquiry</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
