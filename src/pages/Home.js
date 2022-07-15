import React, { useEffect } from "react";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Uses from "../components/Uses";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Hero />
      <Featured />
      <Uses />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
