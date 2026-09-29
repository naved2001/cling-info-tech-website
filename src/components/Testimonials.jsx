import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "The team understood our requirements clearly and turned the idea into a practical digital solution.",
      name: "Client Feedback",
      role: "Business Owner",
      company: "Digital Project",
    },
    {
      quote:
        "From planning to development, the communication was clear and the overall process stayed focused on our goals.",
      name: "Client Feedback",
      role: "Project Manager",
      company: "Technology Project",
    },
    {
      quote:
        "The final product gave us a much better digital experience and a stronger foundation for future growth.",
      name: "Client Feedback",
      role: "Business Team",
      company: "Digital Solution",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const active = testimonials[activeIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">

          <div className="testimonials-eyebrow">
            <span></span>
            CLIENT COLLABORATION
          </div>

          <div className="testimonials-heading">
            <h2>
              Built through collaboration.
              <span>Driven by real requirements.</span>
            </h2>

            <p>
              Strong digital products come from collaboration,
              communication, and a clear understanding of the
              people using them.
            </p>
          </div>

        </div>

        {/* Testimonial */}
        <div className="testimonial-card">

          {/* Quote Icon */}
          <div className="testimonial-quote-icon">
            <Quote size={28} />
          </div>

          {/* Main Quote */}
          <div className="testimonial-main">

            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote key={activeIndex}>
              “{active.quote}”
            </blockquote>

            <div className="testimonial-author">

              <div className="testimonial-avatar">
                {active.name.charAt(0)}
              </div>

              <div>
                <strong>{active.name}</strong>
                <span>
                  {active.role} · {active.company}
                </span>
              </div>

            </div>

          </div>

          {/* Controls */}
          <div className="testimonial-controls">

            <div className="testimonial-counter">
              <strong>
                {String(activeIndex + 1).padStart(2, "0")}
              </strong>

              <span>
                / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="testimonial-buttons">

              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Trust Statement */}
        <div className="testimonial-bottom">

          <span>COLLABORATION MATTERS</span>

          <div className="testimonial-bottom-line"></div>

          <p>
            We work closely with our clients throughout the
            journey — from the first conversation to launch.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;