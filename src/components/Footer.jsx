import {
  ArrowUpRight,
  Mail,
  ArrowUp,
  Phone
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Reveal from "./Reveal";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <footer className="footer">
        <div className="footer-container">

          {/* Main Footer */}

          <div className="footer-main">

            {/* Brand */}

            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-mark">C</span>

                <span className="footer-logo-text">
                  CLING<span>INFO</span>
                </span>
              </a>

              <p>
                Building meaningful digital experiences through
                strategy, design, and technology.
              </p>

              <a href="#contact" className="footer-start-link">
                Start a Project
                <ArrowUpRight size={17} />
              </a>
            </div>


            {/* Navigation */}

            <div className="footer-column">
              <span className="footer-column-title">
                EXPLORE
              </span>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>


            {/* Services */}

            <div className="footer-column">
              <span className="footer-column-title">
                SERVICES
              </span>

              <a href="#services">
                Web Development
              </a>

              <a href="#services">
                Mobile Applications
              </a>

              <a href="#services">
                Digital Marketing
              </a>

              <a href="#services">
                Custom Web Portals
              </a>

              <a href="#services">
                ERP Solutions
              </a>
            </div>


            {/* Connect */}

            <div className="footer-column footer-connect">
              <span className="footer-column-title">
                CONNECT
              </span>

              <a href="mailto:info@clinginfotech.com">
                <Mail size={16} />
                info@clinginfotech.com
              </a>

              <a
                href="tel:+918264469132"
                aria-label="Call Cling Info Tech"
              >
                <Phone size={18} />
                +91 8264469132
              </a>

              <div className="footer-socials">

                <a
                  href="https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
      
                  <FontAwesomeIcon icon={faLinkedin} />

                </a>

                <a
                  href="https://www.instagram.com/clinginfotechworks/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  aria-label="GitHub"
                >
                  
                  <FontAwesomeIcon icon={faGithub} />
                </a>

              </div>
            </div>

          </div>


          {/* Large Footer Text */}

          <div className="footer-big-text">
            LET'S BUILD.
          </div>


          {/* Footer Bottom */}

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Cling Info Tech Works Private Limited.
              All rights reserved.
            </p>

            <div className="footer-bottom-links">
              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms
              </a>
            </div>

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>
      </footer>
    </Reveal>
  );
}

export default Footer;