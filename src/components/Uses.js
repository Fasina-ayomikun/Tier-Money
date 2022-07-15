import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import laptop from "../images/laptop.jpg";
import phone from "../images/phone.jpg";
import person from "../images/person.jpg";
import qrcode from "../images/qr.jpg";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";

function Uses() {
  return (
    <section className='uses-section'>
      <Container className='uses-container'>
        <Row>
          <Col>
            <img src={laptop} alt='' />
          </Col>
          <Col>
            <h3>The account for you</h3>
            <p>
              Get salaries and benefits paid directly into your personal
              account, with your own sort code, account number and prepaid card.
            </p>
            <Button variant='primary'>Find more</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Access day and night</h3>
            <p>
              Wherever you are, manage and move your money securely 24 hours a
              day, 7 days a week through your online account or mobile app.
            </p>

            <img src={appstore} alt='' className='stores-img ' />
            <img src={googleplay} alt='' className='stores-img ' />
          </Col>
          <Col className='phone'>
            <img src={phone} alt='' />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={person} alt='' />
          </Col>
          <Col>
            <h3>Total peace of mind</h3>
            <p>
              Use your account securely with Two-Factor Authentication and
              report your card lost on our 24/7 telephone line, blocking access
              to your money instantly 24/7.
            </p>
            <Button variant='primary'>Find more</Button>
          </Col>
        </Row>
        <Row className='uses-qr'>
          <Col>
            <h3>Pay & Receive money using QR Code</h3>
            <p>
              Every user can pay or recieve payment by simply using the standard
              QR Code on the account or generatin a new QR Code with a specific
              amount.
            </p>

            <img src={appstore} alt='' className='stores-img ' />
            <img src={googleplay} alt='' className='stores-img ' />
          </Col>
          <Col>
            <img src={qrcode} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Uses;
