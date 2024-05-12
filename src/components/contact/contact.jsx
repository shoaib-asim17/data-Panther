import React, { useEffect, useState } from 'react';
import './contactstyle.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
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

  const variantsContact = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  };

  return (
    <div className="wrapperContact" ref={ref}>
      <motion.div className="contact-container" variants={variantsContact} initial="initial" animate={controls}>
        <h1>Contact Us</h1>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </motion.div>

      <motion.div className="info" variants={variantsContact} initial="initial" animate={controls}>
        <motion.h1 variants={variantsContact} className="typewriter">
          Call or email us <br /> we will show you in more detail <br /> how we can successfully grow your business
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default ContactPage;
