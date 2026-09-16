import { Link } from "react-router-dom";
import "../styles/landing.css";

export function LandingPage() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <Link to="/" className="logo">
          <span className="logo-mark">K</span>
          <span>Kavya Labs</span>
        </Link>

        <nav className="nav-links">
          <a href="#why">Why Kavya</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Sign In
          </Link>

          <Link to="/signup" className="nav-button">
            Get Started
          </Link>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="eyebrow">
            <span className="status-dot"></span>
            AI infrastructure for modern teams
          </div>

          <h1>
            Intelligence
            <br />
            <span>built for what comes next.</span>
          </h1>

          <p>
            Kavya Labs helps teams turn complex data into intelligent,
            actionable systems with powerful AI infrastructure.
          </p>

          <div className="hero-actions">

            <Link to="/signup" className="primary-button">
              Get Started
              <span>→</span>
            </Link>

            <a href="#features" className="secondary-button">
              Explore Platform
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>99.9%</strong>
              <span>Reliability</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div>
              <strong>1M+</strong>
              <span>Events Ready</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY KAVYA ================= */}
      <section className="content-section" id="why">

        <div className="section-heading">

          <span>WHY KAVYA LABS</span>

          <h2>
            From raw data to
            <br />
            meaningful intelligence.
          </h2>

          <p>
            Build intelligent workflows without turning your infrastructure
            into a maze of disconnected tools.
          </p>

        </div>


        {/* Netflix-style row */}
        <div className="content-row">

          <article className="content-card large-card">

            <div className="card-number">
              01
            </div>

            <div className="card-content">

              <h3>
                One intelligent platform
              </h3>

              <p>
                Bring your data, systems and AI workflows into one
                centralized environment designed for modern teams.
              </p>

            </div>

            <div className="card-gradient"></div>

          </article>


          <article className="content-card">

            <div className="card-number">
              02
            </div>

            <div className="card-content">

              <h3>
                Built for scale
              </h3>

              <p>
                Start small and scale your workloads as your
                organization grows.
              </p>

            </div>

          </article>


          <article className="content-card">

            <div className="card-number">
              03
            </div>

            <div className="card-content">

              <h3>
                Designed for teams
              </h3>

              <p>
                Give technical and business teams a clear view of
                the systems powering their operations.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ================= PLATFORM ================= */}
      <section className="content-section" id="features">

        <div className="section-heading">

          <span>THE PLATFORM</span>

          <h2>
            Everything you need
            <br />
            to build smarter.
          </h2>

        </div>


        <div className="feature-row">

          <article className="feature-card">

            <div className="feature-top">
              <span className="feature-icon">✦</span>
              <span className="feature-arrow">↗</span>
            </div>

            <div>
              <h3>
                Intelligent Analytics
              </h3>

              <p>
                Transform large volumes of operational data into
                clear, actionable insights.
              </p>
            </div>

          </article>


          <article className="feature-card">

            <div className="feature-top">
              <span className="feature-icon">◈</span>
              <span className="feature-arrow">↗</span>
            </div>

            <div>
              <h3>
                Real-Time Processing
              </h3>

              <p>
                Monitor activity and process events as your systems
                generate them.
              </p>
            </div>

          </article>


          <article className="feature-card">

            <div className="feature-top">
              <span className="feature-icon">⌁</span>
              <span className="feature-arrow">↗</span>
            </div>

            <div>
              <h3>
                Adaptive Systems
              </h3>

              <p>
                Create systems that evolve with changing data and
                business requirements.
              </p>
            </div>

          </article>


          <article className="feature-card">

            <div className="feature-top">
              <span className="feature-icon">◉</span>
              <span className="feature-arrow">↗</span>
            </div>

            <div>
              <h3>
                Centralized Control
              </h3>

              <p>
                Manage your users, activity and intelligent workflows
                from one control center.
              </p>
            </div>

          </article>

        </div>

      </section>


      {/* ================= INTELLIGENCE SHOWCASE ================= */}
      <section className="showcase-section">

        <div className="showcase-content">

          <span>INTELLIGENCE CONSOLE</span>

          <h2>
            See your systems
            <br />
            think in real time.
          </h2>

          <p>
            Monitor events, analyze activity and understand your
            intelligent infrastructure from one unified workspace.
          </p>

          <Link to="/signup" className="primary-button">
            Start Building
            <span>→</span>
          </Link>

        </div>


        <div className="dashboard-preview">

          <div className="preview-header">

            <div>
              <small>SYSTEM OVERVIEW</small>
              <h3>Intelligence Console</h3>
            </div>

            <span className="live-badge">
              <span></span>
              LIVE
            </span>

          </div>


          <div className="preview-stats">

            <div>
              <span>Events</span>
              <strong>84,291</strong>
              <small>+18.4%</small>
            </div>

            <div>
              <span>Processed</span>
              <strong>98.7%</strong>
              <small>+4.2%</small>
            </div>

            <div>
              <span>Alerts</span>
              <strong>124</strong>
              <small>Today</small>
            </div>

          </div>


          <div className="activity">

            <div className="activity-header">
              <span>System Activity</span>
              <span>Last 24 hours</span>
            </div>

            <div className="activity-bars">

              <i style={{ height: "35%" }}></i>
              <i style={{ height: "48%" }}></i>
              <i style={{ height: "42%" }}></i>
              <i style={{ height: "68%" }}></i>
              <i style={{ height: "57%" }}></i>
              <i style={{ height: "82%" }}></i>
              <i style={{ height: "72%" }}></i>
              <i style={{ height: "92%" }}></i>
              <i style={{ height: "76%" }}></i>
              <i style={{ height: "100%" }}></i>
              <i style={{ height: "84%" }}></i>
              <i style={{ height: "91%" }}></i>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section className="content-section faq-section" id="faq">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>
            Questions,
            <br />
            answered.
          </h2>

        </div>


        <div className="faq-list">

          <details>
            <summary>
              What is Kavya Labs?
              <span>+</span>
            </summary>

            <p>
              Kavya Labs is an AI-focused platform designed to help
              teams build, monitor and manage intelligent data-driven
              systems.
            </p>
          </details>


          <details>
            <summary>
              Who is Kavya Labs for?
              <span>+</span>
            </summary>

            <p>
              It is designed for startups, engineering teams and
              organizations that want to integrate intelligent systems
              into their workflows.
            </p>
          </details>


          <details>
            <summary>
              Can Kavya Labs scale?
              <span>+</span>
            </summary>

            <p>
              The platform is designed around scalable data processing
              and modular infrastructure.
            </p>
          </details>


          <details>
            <summary>
              Is my data secure?
              <span>+</span>
            </summary>

            <p>
              Security should be implemented throughout the
              infrastructure, including authentication, authorization,
              encrypted transport and secure database access.
            </p>
          </details>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-background"></div>

        <div className="cta-content">

          <span>BUILD THE FUTURE</span>

          <h2>
            Your next intelligent
            <br />
            system starts here.
          </h2>

          <p>
            Create your Kavya Labs workspace and start building.
          </p>

          <Link to="/signup" className="primary-button">
            Get Started
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-brand">

          <Link to="/" className="logo">
            <span className="logo-mark">K</span>
            <span>Kavya Labs</span>
          </Link>

          <p>
            Intelligence for what comes next.
          </p>

        </div>


        <div className="footer-links">

          <a href="#why">
            Why Kavya
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#faq">
            FAQ
          </a>

          <Link to="/login">
            Sign In
          </Link>

        </div>


        <span className="copyright">
          © 2026 Kavya Labs. All rights reserved.
        </span>

      </footer>

    </div>
  );
}