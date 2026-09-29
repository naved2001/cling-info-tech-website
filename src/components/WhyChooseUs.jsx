import {
  ArrowUpRight,
  Target,
  Zap,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Reveal from "./Reveal";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Business First",
      description:
        "We start by understanding the business problem, users, and goals before choosing the technology.",
      icon: Target,
    },
    {
      number: "02",
      title: "Modern Technology",
      description:
        "We use practical and modern technologies to create fast, scalable, and maintainable digital products.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Reliable Solutions",
      description:
        "Our approach focuses on building dependable solutions that businesses can continue to use and grow with.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      description:
        "We believe successful digital products grow through collaboration, communication, and continuous improvement.",
      icon: UsersRound,
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">

        {/* Header */}
        <div className="why-header">

          <div className="why-eyebrow">
            <span></span>
            WHY CLING
          </div>

          <div className="why-heading">
            <h2>
              Technology is only
              <span>part of the solution.</span>
            </h2>

            <p>
              We combine technology, design, and business thinking
              to create digital solutions that have a purpose.
            </p>
          </div>

        </div>

        {/* Main Visual */}
        <div className="why-hero">

          <div className="why-hero-background">
            <div className="why-ring ring-one"></div>
            <div className="why-ring ring-two"></div>
            <div className="why-ring ring-three"></div>

            <div className="why-center">
              <span>CLING</span>
              <strong>BUILD</strong>
              <small>WITH PURPOSE</small>
            </div>
          </div>

          <div className="why-hero-content">
            <span>OUR PHILOSOPHY</span>

            <h3>
              We don't just
              <br />
              <em>write code.</em>
            </h3>

            <p>
              Every product should solve a meaningful problem,
              create a better experience, and support the business
              behind it.
            </p>

            <a href="#contact">
              Start a conversation
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>

        {/* Reasons */}
        <div className="why-reasons">

          {reasons.map((reason,index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.number}
                delay={index * 0.1}
              >
                <article className="why-card" key={reason.number}>

                  <div className="why-card-number">
                    {reason.number}
                  </div>

                  <div className="why-card-icon">
                    <Icon size={22} />
                  </div>

                  <div className="why-card-content">
                    <h3>{reason.title}</h3>

                    <p>{reason.description}</p>
                  </div>

                  <ArrowUpRight
                    className="why-card-arrow"
                    size={20}
                  />

                  <div className="why-card-bg-number">
                    {reason.number}
                  </div>

                </article>
              </Reveal>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <div className="why-bottom">

          <div className="why-bottom-line"></div>

          <p>
            Good technology solves today's problem.
            Great technology prepares you for tomorrow.
          </p>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;