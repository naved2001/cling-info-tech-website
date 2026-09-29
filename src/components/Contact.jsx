import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import Reveal from "./Reveal";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Header */}

        <div className="contact-header">
          <div className="contact-eyebrow">
            <span></span>
            LET'S TALK
          </div>

          <div className="contact-heading">
            <h2>
              Have an idea?
              <span> Let's build it together.</span>
            </h2>

            <p>
              Tell us about your project, challenge, or idea.
              We'll explore the possibilities and figure out
              the right way to move forward.
            </p>
          </div>
        </div>

        {/* Main Contact Area */}
        <Reveal direction="up">
          <div className="contact-layout">

            {/* Left Side */}

            <div className="contact-info">

              <div className="contact-info-intro">
                <span>START A CONVERSATION</span>

                <h3>
                  Your next digital
                  <em> project starts here.</em>
                </h3>

                <p>
                  Whether you are building something new or
                  improving an existing product, let's talk about
                  how technology can help your business move forward.
                </p>
              </div>

              <div className="contact-info-list">

                <a
                  href="mailto:info@clinginfotech.com"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <strong>info@clinginfotech.com</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="tel:+918264469132"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                    <span>PHONE</span>
                    <strong>+91 82644 69132</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>Noida · Pune · Moradabad</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </div>


              </div>
              <div className="contact-address">
                <span>HEAD OFFICE</span>

                <p>
                  130, 131, 132, 2nd Floor, Wave Galleria,
                  Wave City, NH-24, Noida, Uttar Pradesh - 201015
                </p>
              </div>

              <div className="contact-note">
                <div className="contact-note-dot"></div>

                <p>
                  Let's turn your idea into something people
                  can actually use.
                </p>
              </div>

            </div>

            {/* Right Side — Form */}

            <div className="contact-form-wrapper">

              <div className="contact-form-top">
                <div>
                  <span>PROJECT INQUIRY</span>
                  <h3>Tell us about your project</h3>
                </div>

                <div className="contact-form-icon">
                  <Send size={20} />
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project">
                      Project Type
                    </label>

                    <select
                      id="project"
                      name="project"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      <option value="web">
                        Web Development
                      </option>

                      <option value="mobile">
                        Mobile Application
                      </option>

                      <option value="software">
                        Custom Software
                      </option>

                      <option value="portal">
                        Business Portal
                      </option>

                      <option value="marketing">
                        Digital Marketing
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your idea, goals, requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  {formSubmitted ? (
                    <>
                      Message Sent
                      <CheckCircle2 size={19} />
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <ArrowUpRight size={19} />
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  By submitting this form, you agree to be contacted
                  regarding your project inquiry.
                </p>

              </form>

            </div>

          </div>
        </Reveal>

        {/* Bottom CTA */}

        <div className="contact-bottom">
          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-content">
            <span>BUILD • CREATE • GROW</span>

            <p>
              Great digital products begin with a conversation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;