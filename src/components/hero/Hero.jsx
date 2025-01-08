import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense, useEffect, useState } from "react";

// Framer Motion animation for the green dot
const dotVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.3, 1],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  },
};

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const certificateVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  // Get current time in Nairobi, East Africa Time
  // State to store the current time
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const time = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };
    // Initial call to set the time updateTime();
    // // Update the time every minute
    const intervalId = setInterval(updateTime, 60000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='hero'>
      {/* Promotional Message */}{" "}
      <div className='promoMessage'>
        {" "}
        <motion.div
          className='heroPromoDot'
          variants={dotVariants}
          initial='initial'
          animate='animate'
        />{" "}
        <span>
          <span className='heroPromoDotSpan'>Available Now</span> • Nairobi, KE •{" "}
          {currentTime} (EAT)
        </span>{" "}
      </div>
      <div className='hSection left'>
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='hTitle'>
          Hey There,
          <br />
          <span>Let&apos;s work on your Design!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial='initial'
          animate='animate'
          className='awards'>
          <motion.h2 variants={awardVariants}>Our Socials</motion.h2>
          <motion.p variants={awardVariants}>
            Follow us on our Social Media platforms.
          </motion.p>
          <motion.div variants={awardVariants} className='awardList'>
            <motion.a
              variants={awardVariants}
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.img
                variants={awardVariants}
                src='/linkedin.svg'
                alt='LinkedIn'
              />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.img
                variants={awardVariants}
                src='/instagram-48.png'
                alt='Instagram'
              />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.img
                variants={awardVariants}
                src='/x.svg'
                alt='Twitter'
              />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <motion.img
                variants={awardVariants}
                src='/facebook.svg'
                alt='Facebook'
              />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href='#services'
          alt='services'
          className='scroll'>
          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d='M12 5V8'
              stroke='white'
              strokeWidth='1'
              strokeLinecap='round'
            />
          </svg>
        </motion.a>
      </div>
      <div className='hSection right'>
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial='initial'
          animate='animate'
          className='follow'>
          <motion.a variants={followVariants} href='/'>
            <img src='/linkedin.svg' alt='LinkedIn' />
          </motion.a>
          <motion.a variants={followVariants} href='/'>
            <img src='/x.svg' alt='Twitter' />
          </motion.a>
          <motion.a variants={followVariants} href='/'>
            <img src='/facebook.svg' alt='Facebook' />
          </motion.a>
          <motion.div variants={followVariants} className='followTextContainer'>
            <div className='followText'>FOLLOW US</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          variants={certificateVariants}
          initial='initial'
          animate='animate'
          className='certificate'>
          {/* <img src="/certificate.png" alt="" /> */}
          Branding
          <br />
          Graphic Design
          {/* <br />
          Product Design */}
          <br />
          Research & Consulting
          <br />
          UI & UX Design
          <br />
          Web Development
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href='/#contact'
          alt='Contact'
          className='contactLink'
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}>
          <motion.div
            className='contactButton'
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}>
            <svg viewBox='0 0 200 200' width='150' height='150'>
              <circle cx='100' cy='100' r='90' fill='white' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text>
                <textPath href='#innerCirclePath' className='circleText'>Hire Now •</textPath>
              </text>
              <text>
                <textPath href='#innerCirclePath' startOffset='44%' className='circleText'>
                  Contact Us •
                </textPath>
              </text>
            </svg>
            <div className='arrow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='50'
                height='50'
                fill='none'
                stroke='#0186ff'
                strokeWidth='2'>
                <line x1='6' y1='18' x2='18' y2='6' />
                <polyline points='9 6 18 6 18 15' />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        {/* 3d */}
        <Canvas>
          <Suspense fallback='loading...'>
            <Shape />
          </Suspense>
        </Canvas>
        {/* <div className="hImg">
          <img src="/hero.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
