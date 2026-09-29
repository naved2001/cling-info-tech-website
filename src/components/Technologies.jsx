import { useState } from "react";
import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "./Reveal";

function Technologies() {
  const categories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Monitor,
      description:
        "Modern interfaces and responsive web experiences built for speed and usability.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      description:
        "Reliable server-side applications and APIs designed for scalable products.",
      technologies: [
        "Python",
        "Django",
        "Node.js",
        "PHP",
        "REST API",
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      icon: Smartphone,
      description:
        "Mobile applications designed to deliver smooth experiences across devices.",
      technologies: [
        "Flutter",
        "Android",
        "iOS",
        "React Native",
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: Database,
      description:
        "Structured data systems that keep applications reliable and efficient.",
      technologies: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
      ],
    },
    {
      id: "cloud",
      title: "Cloud",
      icon: Cloud,
      description:
        "Cloud-ready infrastructure and deployment solutions for modern applications.",
      technologies: [
        "AWS",
        "Azure",
        "Cloud Deployment",
        "Server Management",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("frontend");

  const active = categories.find(
    (category) => category.id === activeCategory
  );

  const ActiveIcon = active.icon;

  return (
    <section className="technology-section" id="technology">
      <div className="technology-container">

        {/* Header */}
        <div className="technology-header">
          <div className="technology-eyebrow">
            <span></span>
            TECHNOLOGY
          </div>

          <div className="technology-heading">
            <h2>
              We work across the
              <span> modern digital stack.</span>
            </h2>

            <p>
              Combining modern technologies with practical development
              approaches to create reliable digital products.
            </p>
          </div>
        </div>

        {/* Main Technology Area */}
        <div className="technology-layout">

          {/* Categories */}
          <div className="technology-categories">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Reveal
                  key={category.id}
                  delay={0.05 * categories.indexOf(category)}
                >
                  <button
                    key={category.id}
                    className={`technology-category ${activeCategory === category.id ? "active" : ""
                      }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="technology-category-icon">
                      <Icon size={20} />
                    </div>

                    <div className="technology-category-content">
                      <span>{category.title}</span>
                      <small>
                        {category.technologies.length} technologies
                      </small>
                    </div>

                    <ArrowUpRight
                      className="technology-category-arrow"
                      size={18}
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Active Category */}
          <div className="technology-display">

            <div className="technology-display-top">
              <div className="technology-display-icon">
                <ActiveIcon size={28} />
              </div>

              <div>
                <span>EXPERTISE</span>
                <h3>{active.title}</h3>
              </div>
            </div>

            <p className="technology-description">
              {active.description}
            </p>

            <div className="technology-list">
              {active.technologies.map((technology, index) => (
                <div
                  className="technology-item"
                  key={technology}
                  style={{
                    "--item-delay": `${index * 0.05}s`,
                  }}
                >
                  <Layers size={16} />
                  <span>{technology}</span>
                </div>
              ))}
            </div>

            <div className="technology-display-footer">
              <span>BUILD WITH MODERN TECHNOLOGY</span>

              <div className="technology-line"></div>
            </div>

          </div>
        </div>

        {/* Bottom Statement */}
        <div className="technology-bottom">
          <span>01 — TECHNOLOGY FIRST</span>

          <p>
            The right technology is not about following trends.
            It is about choosing the right tools for the problem.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Technologies;