import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Megaphone,
  Boxes,
  Database,
} from "lucide-react";

import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Design & Development",
      description:
        "Modern websites and web applications designed and developed around your business goals.",
      icon: Code2,
      tags: ["React", "Node.js", "PHP"],
    },
    {
      number: "02",
      title: "Mobile Applications",
      description:
        "Engaging mobile experiences designed for Android, iOS, and cross-platform products.",
      icon: Smartphone,
      tags: ["Android", "iOS", "Flutter"],
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Digital strategies that help businesses connect with their audience and grow online.",
      icon: Megaphone,
      tags: ["SEO", "Social Media", "PPC"],
    },
    {
      number: "04",
      title: "Custom Portals",
      description:
        "Purpose-built portals that simplify workflows, collaboration, and customer experiences.",
      icon: Boxes,
      tags: ["Business", "Customer", "Enterprise"],
    },
    {
      number: "05",
      title: "ERP Solutions",
      description:
        "Business management solutions designed to bring important operations together.",
      icon: Database,
      tags: ["Management", "Automation", "Analytics"],
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="services-header">

          <div className="services-eyebrow">
            <span></span>
            WHAT WE DO
          </div>

          <div className="services-heading">

            <h2>
              Digital solutions
              <br />
              <span>built around your business.</span>
            </h2>

            <p>
              From the first idea to the final product,
              we combine strategy, design, and technology
              to create solutions that solve real problems.
            </p>

          </div>

        </div>


        {/* =================================
            SERVICES LIST
        ================================= */}

        <div className="services-list">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <Reveal
                key={service.number}
                delay={Number(service.number) * 0.08}
              >
                <article
                  className="service-card"
                  key={service.number}
                >

                  {/* Number */}

                  <div className="service-number">
                    {service.number}
                  </div>


                  {/* Icon */}

                  <div className="service-icon">
                    <Icon size={24} />
                  </div>


                  {/* Main Content */}

                  <div className="service-content">

                    <h3>{service.title}</h3>

                    <p>
                      {service.description}
                    </p>


                    {/* Tags */}

                    <div className="service-tags">

                      {service.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* Arrow */}

                  <div className="service-arrow">
                    <ArrowUpRight size={22} />
                  </div>


                  {/* Hover Number */}

                  <div className="service-background-number">
                    {service.number}
                  </div>

                </article>
              </Reveal>
            );

          })}

        </div>


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="services-bottom">

          <p>
            Have a project in mind?
          </p>

          <a href="#contact">
            Let's discuss your idea
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Services;