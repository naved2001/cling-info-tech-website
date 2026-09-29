import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  FileText,
  Mail,
  Receipt,
  TrendingUp,
  ListTodo,
} from "lucide-react";

import Reveal from "./Reveal";

function Products() {
  const products = [
    {
      id: "taskflow",
      name: "Task Flow",
      category: "PROJECT MANAGEMENT",
      description:
        "Organize projects, manage tasks, collaborate with teams, and keep your workflow moving from one place.",
      icon: ListTodo,
      features: [
        "Task management",
        "Project tracking",
        "Team collaboration",
        "Progress monitoring",
      ],
      metric: "86%",
      metricLabel: "Tasks completed",
    },

    {
      id: "sales",
      name: "Cling Sales",
      category: "SALES MANAGEMENT",
      description:
        "Manage leads, follow-ups, sales activities, and customer relationships through one connected platform.",
      icon: TrendingUp,
      features: [
        "Lead management",
        "Follow-up tracking",
        "Sales workflow",
        "Performance insights",
      ],
      metric: "74%",
      metricLabel: "Conversion rate",
    },

    {
      id: "invoice",
      name: "Cling Invoice",
      category: "INVOICING",
      description:
        "Create and manage invoices while keeping your billing workflow organized and accessible.",
      icon: Receipt,
      features: [
        "Invoice management",
        "Billing workflow",
        "Payment tracking",
        "Business records",
      ],
      metric: "92%",
      metricLabel: "Invoices processed",
    },

    {
      id: "income",
      name: "Cling Income",
      category: "FINANCE",
      description:
        "Keep track of business income and get a clearer view of financial activity.",
      icon: FileText,
      features: [
        "Income tracking",
        "Financial overview",
        "Reports",
        "Business insights",
      ],
      metric: "81%",
      metricLabel: "Income tracked",
    },

    {
      id: "emails",
      name: "Cling Emails",
      category: "COMMUNICATION",
      description:
        "Keep business communication organized with a centralized email workflow.",
      icon: Mail,
      features: [
        "Email management",
        "Communication tracking",
        "Organized inbox",
        "Team workflow",
      ],
      metric: "98%",
      metricLabel: "Messages organized",
    },
  ];

  const [activeProduct, setActiveProduct] = useState(products[0]);

  const ActiveIcon = activeProduct.icon;

  return (
    <section className="products-section" id="products">
      <div className="products-container">

        {/* Section Header */}

        <div className="products-header">

          <div className="products-eyebrow">
            <span></span>
            DIGITAL PRODUCTS
          </div>

          <div className="products-heading">
            <h2>
              Tools built for
              <span>modern businesses.</span>
            </h2>

            <p>
              Explore digital products designed to simplify
              everyday business workflows.
            </p>
          </div>

        </div>


        {/* Product Interface */}

        <Reveal direction="up">
          <div className="products-interface">

            {/* Product Navigation */}

            <div className="products-menu">

              {products.map((product, index) => {
                const Icon = product.icon;

                const isActive =
                  activeProduct.id === product.id;

                return (
                  <button
                    key={product.id}
                    className={`product-menu-item ${isActive ? "active" : ""
                      }`}
                    onClick={() =>
                      setActiveProduct(product)
                    }
                  >

                    <div className="product-menu-number">
                      0{index + 1}
                    </div>

                    <div className="product-menu-icon">
                      <Icon size={18} />
                    </div>

                    <div className="product-menu-content">
                      <strong>
                        {product.name}
                      </strong>

                      <span>
                        {product.category}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="product-menu-arrow"
                    />

                  </button>
                );
              })}

            </div>


            {/* Product Preview */}

            <div className="product-showcase">

              <div className="product-showcase-glow"></div>

              <div className="product-showcase-top">

                <div className="product-showcase-label">
                  {activeProduct.category}
                </div>

                <div className="product-showcase-status">
                  <span></span>
                  DIGITAL PRODUCT
                </div>

              </div>


              <div className="product-showcase-content">

                {/* Product Info */}

                <div className="product-info">

                  <div className="product-icon-large">
                    <ActiveIcon size={28} />
                  </div>

                  <h3>
                    {activeProduct.name}
                  </h3>

                  <p>
                    {activeProduct.description}
                  </p>

                  <div className="product-features">

                    {activeProduct.features.map(
                      (feature) => (
                        <div
                          className="product-feature"
                          key={feature}
                        >
                          <span>
                            <Check size={13} />
                          </span>

                          {feature}
                        </div>
                      )
                    )}

                  </div>

                  <a
                    href="#contact"
                    className="product-cta"
                  >
                    Discuss a Solution
                    <ArrowUpRight size={17} />
                  </a>

                </div>


                {/* Dashboard Preview */}

                <div className="product-dashboard">

                  <div className="dashboard-window">

                    <div className="dashboard-topbar">

                      <div className="dashboard-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="dashboard-url">
                        app.cling
                      </div>

                    </div>


                    <div className="dashboard-body">

                      <aside className="dashboard-sidebar">

                        <div className="dashboard-brand">
                          <ActiveIcon size={16} />
                        </div>

                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                      </aside>


                      <div className="dashboard-main">

                        <div className="dashboard-heading">

                          <div>
                            <span>
                              Dashboard
                            </span>

                            <strong>
                              Overview
                            </strong>
                          </div>

                          <div className="dashboard-avatar">
                            N
                          </div>

                        </div>


                        <div className="dashboard-cards">

                          <div>
                            <span>
                              Total
                            </span>

                            <strong>
                              12,840
                            </strong>

                            <small>
                              +12.8%
                            </small>
                          </div>

                          <div>
                            <span>
                              Active
                            </span>

                            <strong>
                              8,420
                            </strong>

                            <small>
                              +8.4%
                            </small>
                          </div>

                          <div>
                            <span>
                              Growth
                            </span>

                            <strong>
                              {activeProduct.metric}
                            </strong>

                            <small>
                              This month
                            </small>
                          </div>

                        </div>


                        {/* Chart */}

                        <div className="dashboard-chart">

                          <div className="chart-header">
                            <span>
                              Performance
                            </span>

                            <small>
                              Last 30 days
                            </small>
                          </div>

                          <div className="chart-area">

                            <div className="chart-line"></div>

                            <span style={{ height: "35%" }}></span>
                            <span style={{ height: "52%" }}></span>
                            <span style={{ height: "43%" }}></span>
                            <span style={{ height: "68%" }}></span>
                            <span style={{ height: "57%" }}></span>
                            <span style={{ height: "78%" }}></span>
                            <span style={{ height: "92%" }}></span>

                          </div>

                        </div>


                        <div className="dashboard-bottom">

                          <div>
                            <span>
                              {activeProduct.metricLabel}
                            </span>

                            <strong>
                              {activeProduct.metric}
                            </strong>
                          </div>

                          <div className="dashboard-mini-bars">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Products;