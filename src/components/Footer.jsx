import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-neutral-900 text-white p-1"
    >
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="container mx-auto text-center text-sm font-sm">
        <p>© 2024 Aditya Tambe. Building the future, one line of code at a time.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
