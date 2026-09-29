import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "services",
        "work",
        "products",
        "process",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "#home",
      id: "home",
    },
    {
      label: "About",
      href: "#about",
      id: "about",
    },
    {
      label: "Services",
      href: "#services",
      id: "services",
    },
    {
      label: "Work",
      href: "#work",
      id: "work",
    },
    {
      label: "Products",
      href: "#products",
      id: "products",
    },
    {
      label: "Process",
      href: "#process",
      id: "process",
    },
    {
      label: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">C</span>

          <span className="logo-text">
            CLING<span>INFO</span>
          </span>
        </a>

        <nav
          className={`nav-menu ${
            isMenuOpen ? "active" : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              {item.label}

              {item.id === "services" && (
                <ChevronDown size={15} />
              )}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <a
          href="#contact"
          className="navbar-cta"
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-toggle"
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;