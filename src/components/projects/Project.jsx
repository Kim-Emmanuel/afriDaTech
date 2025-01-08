import { useEffect, useRef, useState } from 'react';
import './projects.css';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Button from '../custom-button/Button';

const items = [
  {
    id: 1,
    img: '/p1.png',
    title: 'School Website Design',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta.',
    link: '/',
  },
  {
    id: 2,
    img: '/p2.png',
    title: 'Institution & Organization Website Design',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit.',
    link: '/',
  },
  {
    id: 3,
    img: '/p3.png',
    title: 'Real-time Prompt AI Application',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.',
    link: '/',
  },
  {
    id: 4,
    img: '/p4.png',
    title: 'Entertainment Portfolio Website',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id.',
    link: '/',
  },
  {
    id: 5,
    img: '/p5.png',
    title: 'Animated Portfolio Website',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem',
    link: '/',
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <div className='pItem' ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? 'animate' : 'initial'}
        className='pImg'
      >
        <img src={item.img} alt='' />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? 'animate' : 'initial'}
        className='pText'
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <Button textColor="#007bff" hoverTextColor="#007bff" borderColor="#007bff" color="transparent" hoverColor="rgb(1, 134, 255, 0.06)">View Project</Button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Project = () => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const ref = useRef(null);

  useEffect(() => {
    const updateContainerWidth = () => setContainerWidth(window.innerWidth);
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -containerWidth * items.length]);

  return (
    <div className='portfolio' ref={ref}>
      <motion.div className='pList' style={{ x: xTranslate, width: `${containerWidth * (items.length + 1)}px` }}>
        <div className='empty' style={{ width: containerWidth }} />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section /> <section /> <section /> <section /> <section /> 
      <div className='pProgress'>
        <svg width='100%' height='100%' viewBox='0 0 160 160'>
          <circle
            cx='80'
            cy='80'
            r='70'
            fill='none'
            stroke='#ddd'
            strokeWidth={20}
          />
          <motion.circle
            cx='80'
            cy='80'
            r='70'
            fill='none'
            stroke='#0186ff'
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform='rotate(-90 80 80)'
          />
        </svg>
      </div>
    </div>
  );
};

export default Project;
