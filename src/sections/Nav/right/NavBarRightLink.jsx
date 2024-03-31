import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavBarRightLink = ({ children, rotate, x, duration, delay }) => {
  return (
    <motion.li
      animate={{
        rotate: rotate,
        x: x,
      }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.li>
  );
};
NavBarRightLink.propTypes = {
  children: PropTypes.element.isRequired,
  rotate: PropTypes.array,
  x: PropTypes.array,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default NavBarRightLink;
