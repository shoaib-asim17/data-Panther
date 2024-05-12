import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.scss'; // Assuming you have a stylesheet for the footer

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start('animate');
    } else {
      setIsVisible(false);
      controls.start('initial');
    }
  }, [inView, controls]);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="footer" ref={ref}>
      <motion.div className="footer-content" variants={variants} initial="initial" animate={controls}>
        <h3>Contact Us</h3>
        <p>123 Main Street, Anytown, USA</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 234-567-8900</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
