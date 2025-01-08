import './about.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

const services = [
  {
    icon: <img src="/product-development.svg" width="35" height="35" alt="Product Development" />,
    title: "Branding & Design",
    description: "Take advantage of advanced AI."
  },
  {
    icon: <img src="/enterprise-software.svg" width="35" height="35" alt="Product Development" />,
    title: "E-commerce Design",
    description: "Gain richer customer insights."
  },
  {
    icon: <img src="/uiux-design.svg" width="35" height="35" alt="Product Development" />,
    title: "UI/UX Design",
    description: "Deliver great user experiences."
  },
  {
    icon: <img src="/product-development.svg" width="35" height="35" alt="Product Development" />,
    title: "Product Development",
    description: "Make your product idea its best."
  },
  {
    icon: <img src="/enterprise-software.svg" width="35" height="35" alt="Enterprise Software" />,
    title: "Enterprise Software",
    description: "Cut costs and improve operations."
  },
  {
    icon: <img src="/mobile-app-development.svg" width="35" height="35" alt="Enterprise Software" />,
    title: "Mobile App Development",
    description: "Get a mobile app that wows."
  },
  {
    icon: <img src="/analytics.svg" width="35" height="35" alt="Enterprise Software" />,
    title: "Quality Assurance",
    description: "Be sure of your product’s quality."
  },
  {
    icon: <img src="/analytics.svg" width="35" height="35" alt="Enterprise Software" />,
    title: "Digital Marketing",
    description: "Designing visuals for posts, stories, and ads on platforms."
  },
  {
    icon: <img src="/web-development.svg" width="35" height="35" alt="Enterprise Software" />,
    title: "Web Development",
    description: "Get a fresh, engaging web app."
  }
];

const teamMembers = [
  {
    name: 'John Smith',
    position: 'CEO & Founder, Graphic Designer',
    image: '/war-chief.png',
    linkedin: 'https://www.linkedin.com/in/janedoe'
  },
  {
    name: 'Lily Smith',
    position: 'Software Developer',
    image: '/war-chief.png',
    linkedin: 'https://www.linkedin.com/in/johnsmith'
  },
  {
    name: 'Mike Smith',
    position: 'Web Editor, Social media',
    image: '/war-chief.png',
    linkedin: 'https://www.linkedin.com/in/johnsmith'
  },
  {
    name: 'John Doe',
    position: 'Motion Graphic Designer',
    image: '/war-chief.png',
    linkedin: 'https://www.linkedin.com/in/johnsmith'
  },
  {
    name: 'Mary Smith',
    position: 'Full-Stack Developer',
    image: '/war-chief.png',
    linkedin: 'https://www.linkedin.com/in/johnsmith'
  },
  // Add more team members as needed
];

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

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

/**
 * Helmet metadata for the About page of AfriDA Tech Consultancy.
 * This metadata includes the title, description, keywords, author, 
 * Open Graph properties, and Twitter card information for the page.
 * 
 * @component
 * @example
 * <Helmet>
 *   <title>About - AfriDA Tech Consultancy</title>
 *   <meta name="description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
 *   <meta name="keywords" content="AfriDA, tech consultancy, SMEs, South Sudan, digital transformation, technology solutions" />
 *   <meta name="author" content="AfriDA Tech Consultancy" />
 *   <meta property="og:title" content="About - AfriDA Tech Consultancy" />
 *   <meta property="og:description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
 *   <meta property="og:image" content="/path/to/image.jpg" />
 *   <meta property="og:url" content="https://www.afrida-tech.com/about" />
 *   <meta name="twitter:card" content="summary_large_image" />
 *   <meta name="twitter:title" content="About - AfriDA Tech Consultancy" />
 *   <meta name="twitter:description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
 *   <meta name="twitter:image" content="/path/to/image.jpg" />
 * </Helmet>
 */
const About = () => {
  const controls = useAnimation();
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (aboutInView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, aboutInView]);

  useEffect(() => {
    if (missionInView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, missionInView]);

  useEffect(() => {
    if (achievementsInView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, achievementsInView]);

  useEffect(() => {
    if (teamInView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, teamInView]);

  return (
    <>
      <Helmet>
        <title>About - AfriDA Tech Consultancy</title>
        <meta name="description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
        <meta name="keywords" content="AfriDA, tech consultancy, SMEs, South Sudan, digital transformation, technology solutions" />
        <meta name="author" content="AfriDA Tech Consultancy" />
        <meta property="og:title" content="About - AfriDA Tech Consultancy" />
        <meta property="og:description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.afrida-tech.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - AfriDA Tech Consultancy" />
        <meta name="twitter:description" content="Learn more about AfriDA, a tech consultancy firm dedicated to bridging the technology gap for SMEs in South Sudan. Discover our mission, vision, and the services we offer." />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Helmet>

      <motion.div className="about-container">
        <motion.div
          className="about-section"
          variants={sectionVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          exit="exit"
          ref={aboutRef}
        >
          <div className="about-header">
            <img src="./icon.svg" width="120" height="auto" alt="icon" />
            <div className="">
              <h1>bout</h1>
              <h1>AfriDA.</h1>
            </div>
          </div>

          <div>
            <span>
              <span className='promoDotSpanSlogan'>Tomorrow Begins Today</span>
            </span>{" "}
          </div>

          <motion.p
            style={{
              marginLeft: 'auto',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {" "}
            <motion.div
              className='promoDot'
              variants={dotVariants}
              initial='initial'
              animate='animate'
            />{" "}
            AfriDA is a tech consultancy firm
            dedicated to bridging the technology gap
            for small and medium-sized enterprises (SMEs)
            in South Sudan.
          </motion.p>

          <h2 className="about-title">
            what we do{" "}
            <motion.div
              className="promoDotTaglineAbout"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />{" "}
          </h2>
          <motion.p
            className="about-section"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.5',
              marginTop: '20px',
              color: '#333',
              padding: '10px',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            We focus on empowering these businesses with data-driven
            solutions that foster growth and accelerate digital transformation.
            We provide tailored technology strategies, enabling businesses
            to thrive in an increasingly digital world, with a focus on social
            and economic sustainability across the East African region.
          </motion.p>
        </motion.div>

        <motion.div
          className="mission-section"
          variants={sectionVariants}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          exit="exit"
          ref={missionRef}
        >
          <div className="mission-wrapper">
            <h2 className="mission-title">
              OUR MISSION{" "}
              <motion.div
                className="promoDotTagline"
                variants={dotVariants}
                initial="initial"
                animate="animate"
              />{" "}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              To empower small & medium enterprises with innovative, accessible, and sustainable digital solutions to thrive and compete in a rapidly evolving global market.
            </motion.p>
          </div>

          <motion.div
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: missionInView ? '71%' : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              height: '1px',
              backgroundColor: '#0186ff',
              margin: '20px 0'
            }}
          />

          <div className="vision-wrapper">
            <h2 className="mission-title">
              OUR VISION{" "}
              <motion.div
                className="promoDotTagline"
                variants={dotVariants}
                initial="initial"
                animate="animate"
              />{" "}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              To be the leading catalyst for digital transformation in Africa, driving sustainable growth and turning local businesses into global competitors through innovative technology.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="achievements-section"
          variants={sectionVariants}
          initial="hidden"
          animate={achievementsInView ? "visible" : "hidden"}
          exit="exit"
          ref={achievementsRef}
        >
          <h2 className="services-title">
            What We Offer{" "}
            <motion.div
              className="promoDotTaglineServices"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />{" "}
          </h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Experience you can rely on, results you can trust.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Providing high-quality services tailored to your specific needs.
          </motion.p>

          <motion.div
            className="services-grid"
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="team-section"
          variants={sectionVariants}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          exit="exit"
          ref={teamRef}
        >
          <h1 className="team-title">
            Team & Leadership{" "}
            <motion.div
              className="promoDotTaglineTeam"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />{" "}
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >Meet the Team.</motion.h2>

          <motion.p
            className="team-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our team is made up of passionate individuals who are dedicated to helping businesses grow and succeed.
          </motion.p>

          <motion.div
            className="team-members"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                className="team-member"
                key={index}
                variants={teamMemberVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.img
                  src={member.image}
                  alt={`Team Member ${index + 1}`}
                  className='team-member-img'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="team-member-info"
                  variants={teamMemberVariants}
                >
                  <h3>{member.name}</h3>
                  <p className="team-member-position">{member.position}</p>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src="/linkedin.svg" alt="LinkedIn" className="linkedin-icon" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>

  );
};

export default About;