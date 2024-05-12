import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Qcomp.scss'


const QuotesComponent = () => {
    const [ref, inView] = useInView({
        threshold: 0.5, // 50% visibility threshold
    });
    
    return (
        <div className="QuotesComponent">
        <div className="wrapperExtra1">
            <div className="quotes" ref={ref}>
                {inView && <TypewriterText text="We work with a lot of proximity and commitment with teams available and an execellent understanding of our needs." />}
            </div>
        </div>
        </div>
    );
}

const TypewriterText = ({ text }) => {
    const characters = text.split('');

    return (
        <>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    style={{ display: 'inline-block', overflow: 'hidden' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </>
    );
}

export default QuotesComponent;
