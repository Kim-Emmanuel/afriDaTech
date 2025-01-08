import { lazy, Suspense, useRef, useEffect } from "react";
import CustomPointer from "./components/custom-pointer/CustomPointer";
// import Layout from './components/layout/Layout'; // Import the Layout component
import "./index.css";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/projects/Project"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const element =
        (hash === "#home" && homeRef.current) ||
        (hash === "#services" && servicesRef.current) ||
        (hash === "#portfolio" && portfolioRef.current) ||
        (hash === "#contact" && contactRef.current);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("load", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className='container'>
      <CustomPointer />
      <Suspense fallback='loading...'>
        <section id='home' ref={homeRef} height={"100vh"} offset={-100}>
          <Hero />
        </section>{" "}
      </Suspense>
      <Suspense fallback='loading...'>
        <section id='services' ref={servicesRef} height={"100vh"} offset={-100}>
          <Services />
        </section>{" "}
      </Suspense>
      <Suspense fallback='loading...'>
        <LazyLoad height={"600vh"} offset={-100}> 
          <Portfolio  />
        </LazyLoad>{" "}
      </Suspense>
      <Suspense fallback='loading...'>
        <section id='contact' ref={contactRef} height={"100vh"} offset={-100}>
          <Contact />
        </section>{" "}
      </Suspense>
    </main>
  );
};

export default App;
