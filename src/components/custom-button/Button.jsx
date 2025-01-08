import { useState } from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({ children, onClick, color, hoverColor, hoverTextColor, textColor, borderColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      className="custom-button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: isHovered ? hoverColor : color,
        color: isHovered ? hoverTextColor : textColor,
        border: `1px solid ${borderColor}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;

