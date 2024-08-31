import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './index.css'; // Import custom CSS

const Login = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    registrationNumber: '',
    hospitalType: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hospital Registration Data:', formData);
  };

  return (
    <Container className="form-container mt-5">
      <Row className="justify-content-center">
        {/* Hospital Information */}
        <Col md={6} className="p-4 form-section">
          <h2 className="text-center">Hospital Information</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formHospitalName" className="mb-3">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the hospital name"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRegistrationNumber" className="mb-3">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the registration number"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formHospitalType" className="mb-3">
              <Form.Label>Hospital Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the type of hospital (e.g., General, Specialty)"
                name="hospitalType"
                value={formData.hospitalType}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the hospital address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCity" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formState" className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Col>

        {/* Contact Information */}
        <Col md={6} className="p-4 form-section">
          <h2 className="text-center">Contact Information</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCountry" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formZipCode" className="mb-3">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the zip code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label="I accept the Terms and Conditions of this site"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register 
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
