import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomPointer.css';

const CustomPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerActive, setIsPointerActive] = useState(false);
  const pointerRef = useRef(null);

  useEffect(() => {
    const movePointer = (e) => {
      if (pointerRef.current) {
        const { width, height } = pointerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - width / 2,
          y: e.clientY - height / 2,
        });
      }
    };

    const handlePointer = (e) => {
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        setIsPointerActive(true);
      } else {
        setIsPointerActive(false);
      }
    };

    document.addEventListener('mousemove', movePointer);
    document.addEventListener('mouseover', handlePointer);
    document.addEventListener('mouseout', handlePointer);

    return () => {
      document.removeEventListener('mousemove', movePointer);
      document.removeEventListener('mouseover', handlePointer);
      document.removeEventListener('mouseout', handlePointer);
    };
  }, []);

  return (
    <div className="pointer-container">
      <motion.div
        ref={pointerRef}
        className={`custom-mouse ${isPointerActive ? 'pointer-active' : ''}`}
        id="custom-pointer"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      />
      <motion.div
        className={`outer-circle ${isPointerActive ? 'pointer-active' : ''}`}
        animate={{ x: position.x - 17, y: position.y - 17 }} // Adjusted positioning
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      />
    </div>
  );
};

export default CustomPointer;
