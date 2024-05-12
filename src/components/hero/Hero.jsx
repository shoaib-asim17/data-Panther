import React, { useEffect, useState } from 'react';
import "./hero.scss";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
    scrollButton: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } }
}

const Hero = () => {
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

    return (
        <div className='hero' ref={ref}>
            <motion.div className='textContainer'
                variants={variants}
                initial="initial"
                animate={controls}>
                <motion.div variants={variants} className="wrapper" >
                    <motion.h2 variants={variants} className='typewriter'>Discover Data Driven <br />Insights</motion.h2>
                    <br />
                    <motion.h1 variants={variants} className='typewriter'>PROPEL YOUR BUSINESS <br />
                        WITH SMART DATA <br />
                        SOLUTIONS</motion.h1>
                    <br />
                    <motion.img variants={variants} animate="scrollButton" src="/scroll.png" alt="scroll img" />
                </motion.div>

                <br />
            </motion.div>
        </div>
    )
}

export default Hero;
