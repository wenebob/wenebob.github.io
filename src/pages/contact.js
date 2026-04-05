// src/components/Contact.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        color: "#fff",
        padding: "60px 0",
      }}
    >
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-up">
          Contact Me
        </h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <p
              className="text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              You can reach me directly at <strong>xxx@gmail.com</strong>
              <br />
              or through my social media:
            </p>
            <div
              className="d-flex justify-content-center mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="https://github.com/wenebob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com/in/faith-nchifor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
