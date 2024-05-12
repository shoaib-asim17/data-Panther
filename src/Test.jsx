import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}  // corrected the syntax for delay
        //  whileHover={{opacity:0.5,scale:0.5}}
        whileInView={{opacity:1,scale:2}}
      >
        {/* Your navbar content here */}
      </motion.div>
    </div>
  );
};

export default Test;
