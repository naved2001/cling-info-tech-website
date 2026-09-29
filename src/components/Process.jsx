import {
  ArrowDown,
  ArrowUpRight,
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";

import Reveal from "./Reveal";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      label: "UNDERSTAND",
      description:
        "We learn about your business, audience, goals, and the problem your digital product needs to solve.",
      icon: Search,
    },
    {
      number: "02",
      title: "Plan",
      label: "STRATEGIZE",
      description:
        "We define the product structure, features, technology, timeline, and development direction.",
      icon: ClipboardList,
    },
    {
      number: "03",
      title: "Design",
      label: "CREATE",
      description:
        "We turn ideas into intuitive interfaces and experiences designed around real users.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Develop",
      label: "BUILD",
      description:
        "Our developers transform the approved design into a functional, responsive, and scalable product.",
      icon: Code2,
    },
    {
      number: "05",
      title: "Launch",
      label: "GROW",
      description:
        "We test, deploy, and prepare the product for real users while keeping future improvements in mind.",
      icon: Rocket,
    },
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* Header */}
        <div className="process-header">

          <div className="process-eyebrow">
            <span></span>
            OUR PROCESS
          </div>

          <div className="process-heading">
            <h2>
              From first idea
              <span>to final product.</span>
            </h2>

            <p>
              A structured approach keeps every project focused,
              transparent, and moving in the right direction.
            </p>
          </div>

        </div>

        {/* Process Timeline */}
        <div className="process-timeline">

          <div className="process-line">
            <div className="process-line-progress"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.08}
              >
                <div className="process-step" key={step.number}>

                  {/* Number */}
                  <div className="process-number">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="process-icon">
                    <Icon size={23} />
                  </div>

                  {/* Content */}
                  <div className="process-content">

                    <span className="process-label">
                      {step.label}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <div className="process-step-footer">
                      <span>STEP {step.number}</span>

                      {index < steps.length - 1 && (
                        <ArrowDown size={16} />
                      )}
                    </div>

                  </div>

                </div>
              </Reveal>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="process-bottom">

          <div className="process-bottom-text">
            <span>READY TO GET STARTED?</span>

            <h3>
              Let's turn your
              <em> idea into reality.</em>
            </h3>
          </div>

          <a href="#contact" className="process-button">
            Start a Project
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Process;