import React from "react";
import logo1 from "../images/asus-logo.png";
import logo2 from "../images/allianz.png";
import logo3 from "../images/chase.png";
import logo4 from "../images/new-york-times.png";
import logo5 from "../images/linkedin.png";

function Featured() {
  return (
    <section className='featured-section'>
      <div className='featured-container'>
        <h3>Featured in</h3>
        <div className='featured'>
          <div>
            <img src={logo1} alt='Asus' />
          </div>
          <div>
            <img src={logo2} alt='Allianz' />
          </div>
          <div>
            <img src={logo3} alt='Chase' />
          </div>
          <div>
            <img src={logo4} alt='The New York Times' />
          </div>
          <div>
            <img src={logo5} alt='Linkedin' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
