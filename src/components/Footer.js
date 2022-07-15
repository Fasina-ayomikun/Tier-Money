import React from "react";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";
import logo from "../images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <div className='newsletter'>
          <div className='newsletter-container'>
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter and stay up to date about the company
            </p>
            <div className='newsletter-input'>
              <input type='email' placeholder='Your Email Address' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='border'></div>
        <div className='footer-contents'>
          <div>
            <div className='left-footer'>
              <img src={logo} alt='Tier Money' className='logo' />
              <ul className='social-icons'>
                <li className='social-icon'>
                  <a href='www.facebook.com'>
                    <FaFacebook />
                  </a>
                </li>
                <li className='social-icon'>
                  <a href='www.instagram.com'>
                    <FaInstagram className='instagram' />
                  </a>
                </li>
                <li className='social-icon'>
                  <a href='www.twitter.com'>
                    <FaTwitter />
                  </a>
                </li>
              </ul>
              <img src={appstore} alt='' className='stores-img ' />
              <img src={googleplay} alt='' className='stores-img ' />
            </div>
            <div className='right-footer'>
              <Row>
                <Col>
                  <h4>Company</h4>
                  <a href='#'>Personal</a>
                  <a href='#'>Business</a>
                  <a href='#'>Pricing</a>
                </Col>
                <Col>
                  <h4>About Us</h4>
                  <a href='#'>Our Values</a>
                  <a href='#'>Careers</a>
                  <a href='#'>Mission and Vision</a>
                  <a href='#'>Our Team</a>
                </Col>
                <Col>
                  <h4>Resources</h4>
                  <a href='#'>Uk Terms and Condition</a>
                  <a href='#'>Cookie Policy</a>
                  <a href='#'>Privacy Policy</a>
                </Col>
                <Col>
                  <h4>Social Media</h4>
                  <a href='www.facebook.com'>Facebook</a>
                  <a href='www,twitter.com'>Twitter</a>
                  <a href='www.instagram.com'>Linkedin</a>
                  <a href='www.linkedin.com'>Linkedin</a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className='bottom-footer'>
          <p>
            Tier Money is a trading name of Taasai FS Ltd is a company
            registered in England and Wales with the registered company number
            13260633 and its registered address at 4638 Spaces, Charter
            Building, London UB8 1JG 4 . Taasai FS Ltd is registered with the
            Financial Conduct Authority as an EMD Agent to distribute or redeem
            electronic money (Register number 952333).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
