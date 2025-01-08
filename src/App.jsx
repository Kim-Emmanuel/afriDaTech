import { lazy, Suspense } from "react";
// import Pointer from "./components/custom-pointer/CustomPointer";
// import Layout from './components/layout/Layout'; // Import the Layout component
import "./index.css";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/projects/Project"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <>
      <main className='container'>
        {/* <Pointer /> */}
        <Suspense fallback='loading...'>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id='#home'>
              <Hero />
            </section>{" "}
          </LazyLoad>
        </Suspense>
        <Suspense fallback='loading...'>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id='#services' >
              <Services />
            </section>{" "}
          </LazyLoad>
        </Suspense>
        <Suspense fallback='loading...'>
          <LazyLoad height={"600vh"} offset={-100}>
            <Portfolio />
          </LazyLoad>{" "}
        </Suspense>
        <Suspense fallback='loading...'>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id='#contact' >
              <Contact />
            </section>{" "}
          </LazyLoad>
        </Suspense>
      </main>
    </>
  );
};

export default App;
