import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import person from "../images/person.jpg";
function Testimonials() {
  return (
    <section className='testimonials-section'>
      <Container className='testimonials-container'>
        <h2>Testimonials</h2>
        <p>Here is what our clients and customers are saying about us</p>
        <Row className='testimonials'>
          <Col>
            <p>
              Card arrived this morning, I had a few queries while setting up
              through the day with all of my direct debits and bills, but the 2
              people I spoke to on two different occasions were more than
              helpful. Great customer service and this will now be my main
              account to hold my money.
            </p>
            <img src={person} alt='' />
            <h4>Sean Farmer</h4>
            <p>Manager SIFAX</p>
          </Col>
          <Col>
            <p>
              Card arrived this morning, I had a few queries while setting up
              through the day with all of my direct debits and bills, but the 2
              people I spoke to on two different occasions were more than
              helpful. Great customer service and this will now be my main
              account to hold my money.
            </p>
            <img src={person} alt='' />
            <h4>Sean Farmer</h4>
            <p>Manager SIFAX</p>
          </Col>
          <Col>
            <p>
              Card arrived this morning, I had a few queries while setting up
              through the day with all of my direct debits and bills, but the 2
              people I spoke to on two different occasions were more than
              helpful. Great customer service and this will now be my main
              account to hold my money.
            </p>
            <img src={person} alt='' />
            <h4>Sean Farmer</h4>
            <p>Manager SIFAX</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
