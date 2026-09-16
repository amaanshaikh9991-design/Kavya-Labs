import { Link } from "react-router-dom";
import "../styles/signup.css";

export function SignupPage() {
  return (
    <div className="auth-page">

      <div className="auth-background">
        <div className="auth-glow"></div>
      </div>

      <div className="auth-container">

        <Link to="/" className="auth-logo">
          <span className="logo-mark">K</span>
          Kavya Labs
        </Link>

        <div className="auth-card">

          <div className="auth-heading">
            <span>GET STARTED</span>

            <h1>
              Build something
              <br />
              <em>intelligent.</em>
            </h1>

            <p>
              Create your Kavya Labs account and enter the future of
              intelligent infrastructure.
            </p>
          </div>

          <form className="auth-form">

            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Rohan Mehta"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a secure password"
                autoComplete="new-password"
              />
            </div>

            <div className="password-note">
              Use at least 8 characters.
            </div>

            <label className="checkbox-row">
              <input type="checkbox" />
              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            <button type="submit" className="auth-button">
              Create Account
              <span>→</span>
            </button>

          </form>

          <div className="auth-divider">
            <span>ALREADY HAVE AN ACCOUNT?</span>
          </div>

          <Link to="/login" className="outline-auth-button">
            Sign In
          </Link>

        </div>

        <p className="auth-footer">
          © 2026 Kavya Labs
        </p>

      </div>
    </div>
  );
}

