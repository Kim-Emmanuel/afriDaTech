/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navRef.current?.classList.remove('floating-nav');
    } else if (currentScrollY > prevScrollY) {
      setIsNavVisible(false);
      navRef.current?.classList.add('floating-nav');
    } else if (currentScrollY < prevScrollY) {
      setIsNavVisible(true);
      navRef.current?.classList.add('floating-nav');
    }

    setPrevScrollY(currentScrollY);
  };

  const updateURLHash = (sectionId) => {
    const newUrl = `#${sectionId}`;
    if (window.location.hash !== newUrl) {
      window.history.pushState(null, null, newUrl);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.transform = isNavVisible ? 'translateY(0)' : 'translateY(-100px)';
      navRef.current.style.opacity = isNavVisible ? 1 : 0;
    }
  }, [isNavVisible]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          updateURLHash(sectionId);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${isNavVisible ? "" : "hidden"}`}>

      <div className='container'>
        <div className='navbar-content'>
          <div className='logo'>
            <a href='/'>
              <img src='/logo.svg' alt='Logo' className='logo-image' />
            </a>
          </div>
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}>
            {!isMenuOpen && <span>Menu</span>}
            <motion.div
              className='bar'
              animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <motion.div
              className='bar'
              animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className='menu-overlay'
              initial={{ x: "-100%", scale: 0.8, opacity: 0.5 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              exit={{ x: "-100%", scale: 0.8, opacity: 0.5 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}>
              <ul className='menu-items'>
                <motion.li
                  className={activeSection === "home" ? "current" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}>
                  <a href='/' onClick={toggleMenu} data-number='01'>Home</a>
                </motion.li>
                <motion.li
                  className={activeSection === "about" ? "current" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}>
                  <Link to='/about' onClick={toggleMenu} data-number='02'>About</Link>
                </motion.li>
                <motion.li
                  className={activeSection === "services" ? "current" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}>
                  <a href='/#services' onClick={toggleMenu} data-number='03'>
                    Services
                  </a>
                </motion.li>
                <motion.li
                  className={activeSection === "portfolio" ? "current" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}>
                  <a href='/#portfolio' onClick={toggleMenu} data-number='04'>
                    Portfolio
                  </a>
                </motion.li>
                <motion.li
                  className={activeSection === "contact" ? "current" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}>
                  <a href='#contact' onClick={toggleMenu} data-number='05'>
                    Contact
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
