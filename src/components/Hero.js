import React from "react";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import heroimage from "../images/hero-phone.png";
import map from "../images/hill.png";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container' data-aos='fade-up'>
        <div className='hero-info'>
          <h1>
            Multiple Currency Account <br />
            with no credit check
          </h1>
          <p>
            We believe in financial freedom for everyone, no matter what your
            credit rating or employment status is. That’s why we don’t run
            credit checks or have long-winded application processes and we
            offset the caron footprint for all our users.
          </p>
          <img src={appstore} alt='' className='stores-img' />
          <img src={googleplay} alt='' className='stores-img' />
        </div>
        <div className='hero-image'>
          <img src={heroimage} alt='' />
          <div className='hero1'>
            <img src={hero1} alt='' />
            <p>View all your transaction details</p>
          </div>
          <div className='hero2'>
            <img src={hero2} alt='' />
            <p>
              Transfer money, Bill spillting and QR payment by clicking the
              button.
            </p>
          </div>
          <div className='hero3'>
            <img src={hero3} alt='' />
            <div className='hero3-content'>
              <p>Monitor your budget and spending rate.</p>
              <img src={map} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
