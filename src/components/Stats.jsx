import {
  Users,
  Layers3,
  Code2Icon,
  CoffeeIcon,
  ArrowUpRight
} from "lucide-react";

import Reveal from "./Reveal";
import Counter from "./Counter";

function Stats() {
  const stats = [
    {
      number: "32387122",
      label: "Number of lines of code",
      icon: Code2Icon,
    },
    {
      number: "350+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      number: "390+",
      label: "Projects Delivered",
      icon: Layers3,
    },
    {
      number: "1500+",
      label: "Coffee With Clients",
      icon: CoffeeIcon,
    }
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "PHP",
    "Flutter",
    "WordPress",
    "MySQL",
    "AWS",
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        {/* Section Heading */}
        <div className="stats-heading">

          <span className="section-eyebrow">
            OUR EXPERIENCE
          </span>

          <h2>
            Built on experience.
            <span> Driven by technology.</span>
          </h2>

          <p>
            We combine technical expertise, creative thinking,
            and business understanding to build digital solutions
            that create measurable value.
          </p>

        </div>


        {/* Statistics */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                delay={index * 0.12}
              >
                <div className="stat-card">
                  <div className="stat-card-top">
                    <div className="stat-icon">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      className="stat-arrow"
                      size={20}
                    />
                  </div>

                  <strong><Counter value={stat.number} /></strong>

                  <span>{stat.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>


        {/* Technology Marquee */}
        <div className="tech-strip">

          <div className="tech-label">
            TECHNOLOGIES WE WORK WITH
          </div>

          <div className="tech-marquee">

            <div className="tech-track">

              {[...technologies, ...technologies].map(
                (technology, index) => (
                  <span
                    className="tech-item"
                    key={`${technology}-${index}`}
                  >
                    {technology}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;