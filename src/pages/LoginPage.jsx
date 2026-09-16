import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../auth.js";
import "../styles/login.css";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setError(error.message || "Invalid email or password.");
        return;
      }

      console.log("Logged in:", data);

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>

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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && <span>→</span>}
            </button>
          </form>

          <div className="auth-divider">
            <span>NEW TO KAVYA LABS?</span>
          </div>

          <Link to="/signup" className="outline-auth-button">
            Create Account
          </Link>
        </div>

        <p className="auth-footer">
          © 2026 Kavya Labs
        </p>
      </div>
    </div>
  );
}