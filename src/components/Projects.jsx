import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "PROJECT MANAGEMENT",
      title: "Task Flow",
      description:
        "A project management platform designed to organize tasks, collaborate with teams, and monitor project progress.",
      technologies: ["Web App", "Project Management", "Dashboard"],
      icon: LayoutDashboard,
      className: "project-large",
      gradient: "project-gradient-one",
    },
    {
      number: "02",
      category: "MOBILE APPLICATION",
      title: "MatchMe",
      description:
        "A matrimonial application designed to help users discover meaningful connections.",
      technologies: ["Mobile App", "iOS", "Android"],
      icon: Smartphone,
      className: "project-small",
      gradient: "project-gradient-two",
    },
    {
      number: "03",
      category: "AI / MACHINE LEARNING",
      title: "AI Solutions",
      description:
        "AI-focused solutions including computer vision and intelligent automation projects.",
      technologies: ["AI", "Computer Vision", "Automation"],
      icon: BrainCircuit,
      className: "project-small",
      gradient: "project-gradient-three",
    },
    {
      number: "04",
      category: "BUSINESS PLATFORM",
      title: "Cling Sales",
      description:
        "A sales management platform with lead tracking, lead assignment, follow-ups, and sales workflow management.",
      technologies: ["Sales Portal", "Lead Management", "Analytics"],
      icon: BarChart3,
      className: "project-large",
      gradient: "project-gradient-four",
    },
  ];

  return (
    <section className="projects-section" id="work">
      <div className="projects-container">

        {/* Header */}

        <div className="projects-header">

          <div className="projects-eyebrow">
            <span></span>
            SELECTED WORK
          </div>

          <div className="projects-heading">
            <h2>
              Real products.
              <span>Real digital solutions.</span>
            </h2>

            <p>
              A selection of projects and digital products
              represented through a modern interface.
            </p>
          </div>

        </div>


        {/* Projects */}

        <div className="projects-grid">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.number}
                delay={Number(project.number) * 0.1}
                direction={
                  Number(project.number) % 2 === 0
                    ? "right"
                    : "left"
                }
              >
                <article
                  className={`project-card ${project.className}`}
                  key={project.number}
                >

                  {/* Visual */}

                  <div
                    className={`project-visual ${project.gradient}`}
                  >

                    <div className="project-grid-pattern"></div>

                    <div className="project-number">
                      {project.number}
                    </div>


                    {/* Dashboard / App Preview */}

                    <div className="project-preview">

                      <div className="preview-window">

                        <div className="preview-top">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="preview-content">

                          <div className="preview-sidebar">
                            <div className="preview-logo">
                              <Icon size={16} />
                            </div>

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>

                          <div className="preview-main">

                            <div className="preview-heading">
                              <div></div>
                              <div></div>
                            </div>

                            <div className="preview-stats">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>

                            <div className="preview-chart">
                              <div className="chart-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* Project Icon */}

                    <div className="project-center-icon">
                      <Icon size={28} />
                    </div>


                    {/* External icon */}

                    <div className="project-open">
                      <ExternalLink size={20} />
                    </div>

                  </div>


                  {/* Information */}

                  <div className="project-info">

                    <div className="project-meta">

                      <span>
                        {project.category}
                      </span>

                      <ArrowUpRight
                        className="project-arrow"
                        size={21}
                      />

                    </div>

                    <h3>{project.title}</h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-tags">

                      {project.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </article>
              </Reveal>
            );
          })}

        </div>


        {/* Bottom CTA */}

        <div className="projects-bottom">

          <div>

            <span>
              EXPLORE MORE WORK
            </span>

            <h3>
              More ideas.
              <em>More possibilities.</em>
            </h3>

          </div>

          <a
            href="https://www.clinginfotech.com/portfolio"
            target="_blank"
            rel="noreferrer noopener"
            className="projects-cta"
          >
            View Full Portfolio
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;