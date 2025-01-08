import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../custom-button/Button";
import { Link } from "react-router-dom";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="contactInfoSection">

        <div className="contactInfo">
          <div className="infoItem">
            <h3>Address</h3>
            <p>123 AfriDa Tech Consultancy, Tech City, Country</p>
          </div>
          <div className="infoItem phone">
            <h3>Phone</h3>
            <p>+123-456-7890</p>
          </div>
          <div className="infoItem email">
            <h3>Email</h3>
            <p>afridatech@gmail.com</p>
          </div>
          <div className="infoItem">
            <h3>Social Media</h3>
            <p className="social-links">
              <a href="https://linkedin.com" className="social-link linkedin" alt>LinkedIn</a>
              <span className="separator">|</span>
              <a href="https://twitter.com" className="social-link twitter">Twitter</a>
              <span className="separator">|</span>
              <a href="https://facebook.com" className="social-link facebook">Facebook</a>
            </p>
          </div>
          <div className="infoItem business-hours">
            <h3>Business Hours</h3>
            <p>
              Monday to Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
            </p>
          </div>
        </div>
        <div className="contactAbout">
          <Link to="/about">
            <img src="./icon.svg" width="50px" height="50px" alt="about-icon" className="img-fade" />
          </Link>
          <Link to="/about" className="custom-link">
            <span>About</span><br />Afrida
          </Link>
        </div>
      </div>
      <div className="contactFormSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          onSubmit={sendEmail}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >Get In Touch.</motion.h2>
          <motion.div variants={listVariant} className="formItem">
            <input type="text" id="first_name" name="first_name" placeholder=" " required />
            <label htmlFor="first_name">Your full name*</label>
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <input type="email" id="email" name="email" placeholder="" required />
            <label htmlFor="email">Your e-mail*</label>
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <input type="text" id="company_name_or_website_address" name="company_name_or_website_address" placeholder="" />
            <label htmlFor="company_name_or_website_address">Company name or website address</label>
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <input type="text" id="phone_number" name="phone_number" placeholder="" />
            <label htmlFor="phone_number">Phone Number</label>
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <textarea id="message" name="message" placeholder=" "></textarea>
            <label htmlFor="message">Message*</label>
          </motion.div>
          <Button color="transparent" textColor="#444" borderColor="#0186ff" hoverTextColor="#0186ff" hoverColor="rgb(1, 134, 255, 0.07)" variants={listVariant}>
            SUBMIT
          </Button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
