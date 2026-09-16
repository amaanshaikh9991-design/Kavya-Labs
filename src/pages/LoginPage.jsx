import { Link } from "react-router-dom";
import "../styles/login.css";

export function LoginPage() {
  return (
    <div className="auth-page">

      {/* BACKGROUND */}
      <div className="auth-background">
        <div className="auth-glow"></div>
      </div>


      {/* AUTH CONTAINER */}
      <div className="auth-container">

        {/* LOGO */}
        <Link to="/" className="auth-logo">
          <span className="logo-mark">K</span>
          Kavya Labs
        </Link>


        {/* LOGIN CARD */}
        <div className="auth-card">

          {/* HEADING */}
          <div className="auth-heading">

            <span>WELCOME BACK</span>

            <h1>
              Enter your
              <br />
              <em>workspace.</em>
            </h1>

            <p>
              Sign in to access your Kavya Labs intelligence console.
            </p>

          </div>


          {/* LOGIN FORM */}
          <form className="auth-form">

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
              />

            </div>


            {/* PASSWORD */}
            <div className="form-group">

              <div className="label-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-button"
                >
                  Forgot password?
                </button>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />

            </div>


            {/* SIGN IN */}
            <button
              type="submit"
              className="auth-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          {/* DIVIDER */}
          <div className="auth-divider">
            <span>NEW TO KAVYA LABS?</span>
          </div>


          {/* SIGN UP */}
          <Link
            to="/signup"
            className="outline-auth-button"
          >
            Create Account
          </Link>

        </div>


        {/* FOOTER */}
        <p className="auth-footer">
          © 2026 Kavya Labs
        </p>

      </div>

    </div>
  );
}