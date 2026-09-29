import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Globe
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Grid */}
      <div className="hero-grid"></div>

      {/* Glow Effects */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>

            IT solutions for growing businesses
          </div>

          <h1>
            We build
            <span> digital experiences </span>
            that move businesses forward.
          </h1>

          <p className="hero-description">
            From powerful websites and mobile applications to
            custom software solutions, we transform ideas into
            scalable digital products.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="primary-button">
              Start a Project
              <ArrowUpRight size={18} />
            </a>

            <a href="#services" className="secondary-button">
              Explore Services
            </a>

          </div>

          {/* Mini Stats */}
          <div className="hero-mini-stats">

            <div className="mini-stat">
              <strong>350+</strong>
              <span>Clients</span>
            </div>

            <div className="stat-divider"></div>

            <div className="mini-stat">
              <strong>390+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-divider"></div>

            <div className="mini-stat">
              <strong>1500+</strong>
              <span>Coffee With Clients</span>
            </div>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          {/* Main Orb */}
          <div className="hero-orb">

            <div className="orb-inner">

              <div className="orb-icon">
                <Sparkles size={32} />
              </div>

              <span>BUILD</span>

            </div>

          </div>


          {/* Floating Card 1 */}
          <div className="floating-card card-one">

            <div className="floating-icon">
              <Code2 size={20} />
            </div>

            <div>
              <strong>Development</strong>
              <span>Web & Software</span>
            </div>

          </div>


          {/* Floating Card 2 */}
          <div className="floating-card card-two">

            <div className="floating-icon">
              <Globe size={20} />
            </div>

            <div>
              <strong>Global Reach</strong>
              <span>Digital Solutions</span>
            </div>

          </div>


          {/* Decorative Rings */}
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

        </div>

      </div>


      {/* Scroll Indicator */}
      <div className="scroll-indicator">

        <span>Scroll to explore</span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;