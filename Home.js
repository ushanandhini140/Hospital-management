import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import hod from './assets/images/hod.jpg';
import doc from './assets/images/doc.jpg';
import d1 from './assets/images/d1.jpg';
import d2 from './assets/images/d2.jpg';
import d3 from './assets/images/d3.jpg';

const Home = () => (
  <div>
    {/* Image Carousel */}
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hod} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to Our Hospital</h3>
          <p>We provide quality healthcare services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={doc} alt="Second slide" />
        <Carousel.Caption>
          <h3>Expert Medical Professionals</h3>
          <p>Our doctors are highly trained and experienced.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* Doctor Cards Section */}
    <Container className="my-4">
      <h2>Our Doctors</h2>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={d1} />
            <Card.Body>
              <Card.Title>Dr. John Doe</Card.Title>
              <Card.Text>Specialist in Cardiology</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={d2} />
            <Card.Body>
              <Card.Title>Dr. Jane Smith</Card.Title>
              <Card.Text>Specialist in Neurology</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={d3} />
            <Card.Body>
              <Card.Title>Dr. Emily White</Card.Title>
              <Card.Text>Specialist in Pediatrics</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
