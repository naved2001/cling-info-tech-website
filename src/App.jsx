import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import  Contact  from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="app">

      <PageLoader/>
      <ScrollProgress/>
      <CursorGlow/>
      <Navbar />

      <main>

        <Hero />
        <Stats />
        <About/>
        <Services/>
        <Technologies/>
        <Projects/>
        <Products/>
        <WhyChooseUs/>
        <Process/>
        <Testimonials/>
        <Contact/>

      </main>

      <Footer/>

    </div>
  );
}

export default App;