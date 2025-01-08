import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // Ensure it's framer-motion

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            2000,
            "Hi! 🔧 Our team is passionate about creating innovative and efficient software. How can we help you today?"
            ,
            2000,
            "Discover our range of services! 🖥️ From web development to mobile apps, we've got you covered. Let's get started!",
            2000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          className="typewriter"
          repeat={Infinity}
        />
      </div>
      <img src="/war-chief.png" width="30" height="30" alt="profile image" />
    </motion.div>
  );
};

export default Speech;
