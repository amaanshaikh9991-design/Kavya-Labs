import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../auth.js";
import "../styles/signup.css";

export function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        setError(error.message || "Unable to create your account.");
        return;
      }

      console.log("Account created:", data);

      navigate("/login");
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

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>

              <input
                id="name"
                type="text"
                placeholder="Rohan Mehta"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

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
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Create a secure password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="password-note">
              Use at least 8 characters.
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) =>
                  setAcceptedTerms(event.target.checked)
                }
              />

              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

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
              {loading ? "Creating Account..." : "Create Account"}

              {!loading && <span>→</span>}
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