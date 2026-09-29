import {
  ArrowUpRight,
  Lightbulb,
  Palette,
  Code2,
  TrendingUp,
} from "lucide-react";

function About() {
  const capabilities = [
    {
      number: "01",
      title: "Strategy",
      description:
        "We understand your goals, users, and business challenges before we start building.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Design",
      description:
        "We create intuitive digital experiences that combine usability with a strong visual identity.",
      icon: Palette,
    },
    {
      number: "03",
      title: "Development",
      description:
        "We turn ideas into scalable, secure, and reliable digital products.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Growth",
      description:
        "We build solutions designed to evolve with your business and reach more customers.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* =================================
            SECTION INTRO
        ================================= */}

        <div className="about-intro">

          <div className="about-label">
            <span></span>
            ABOUT CLING
          </div>

          <h2>
            We don't just build software.
            <span> We build digital momentum.</span>
          </h2>

          <a href="#contact" className="about-link">
            Let's work together
            <ArrowUpRight size={18} />
          </a>

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="about-main">

          {/* Experience Card */}

          <div className="experience-card">

            <div className="experience-top">

              <span>EST.</span>

              <span>CLING INFO TECH</span>

            </div>

            <div className="experience-number">
              390<span>+</span>
            </div>

            <div className="experience-title">
              PROJECTS
              <br />
              COMPLETED
            </div>

            <div className="experience-decoration">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <p>
              Helping businesses transform ideas into
              meaningful digital experiences.
            </p>

          </div>


          {/* About Description */}

          <div className="about-description">

            <p className="about-lead">
              Great digital products start with a clear
              understanding of the problem.
            </p>

            <p>
              Cling Info Tech works with businesses to
              design and develop digital solutions that
              solve real-world challenges. From websites
              and mobile applications to custom software,
              we bring strategy, design, and technology
              together.
            </p>

            <p>
              Our approach focuses on creating solutions
              that are practical today and flexible enough
              to grow tomorrow.
            </p>

          </div>

        </div>


        {/* =================================
            CAPABILITIES
        ================================= */}

        <div className="capabilities">

          <div className="capabilities-heading">

            <span>OUR APPROACH</span>

            <h3>
              From idea to
              <br />
              <em>impact.</em>
            </h3>

          </div>


          <div className="capabilities-list">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="capability"
                  key={item.number}
                >

                  <div className="capability-number">
                    {item.number}
                  </div>

                  <div className="capability-icon">
                    <Icon size={20} />
                  </div>

                  <div className="capability-content">

                    <h4>{item.title}</h4>

                    <p>
                      {item.description}
                    </p>

                  </div>

                  <ArrowUpRight
                    className="capability-arrow"
                    size={20}
                  />

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;