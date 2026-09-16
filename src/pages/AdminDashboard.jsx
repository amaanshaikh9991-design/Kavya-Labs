import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/admin.css";

const users = [
  {
    id: "USR-001",
    name: "Aarav Sharma",
    email: "aarav@company.com",
    role: "User",
    status: "Active",
    joined: "Sep 16, 2026",
  },
  {
    id: "USR-002",
    name: "Priya Shah",
    email: "priya@company.com",
    role: "Admin",
    status: "Active",
    joined: "Sep 15, 2026",
  },
  {
    id: "USR-003",
    name: "Kabir Patel",
    email: "kabir@company.com",
    role: "User",
    status: "Active",
    joined: "Sep 14, 2026",
  },
  {
    id: "USR-004",
    name: "Ananya Rao",
    email: "ananya@company.com",
    role: "User",
    status: "Inactive",
    joined: "Sep 13, 2026",
  },
  {
    id: "USR-005",
    name: "Vihaan Mehta",
    email: "vihaan@company.com",
    role: "User",
    status: "Active",
    joined: "Sep 12, 2026",
  },
];

const transactions = [
  {
    id: "TXN-84921",
    user: "Aarav Sharma",
    amount: "₹24,500",
    type: "Payment",
    status: "Completed",
    time: "2 min ago",
  },
  {
    id: "TXN-84920",
    user: "Priya Shah",
    amount: "₹8,200",
    type: "Transfer",
    status: "Completed",
    time: "8 min ago",
  },
  {
    id: "TXN-84919",
    user: "Kabir Patel",
    amount: "₹52,000",
    type: "Payment",
    status: "Review",
    time: "14 min ago",
  },
  {
    id: "TXN-84918",
    user: "Ananya Rao",
    amount: "₹4,800",
    type: "Transfer",
    status: "Completed",
    time: "21 min ago",
  },
  {
    id: "TXN-84917",
    user: "Vihaan Mehta",
    amount: "₹91,200",
    type: "Payment",
    status: "Flagged",
    time: "32 min ago",
  },
];

export function AdminDashboard() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <Link to="/" className="admin-brand">
          <span className="logo-mark">K</span>
          <span>Kavya Labs</span>
        </Link>

        <div className="admin-workspace">
          <span>WORKSPACE</span>

          <div className="workspace-box">
            <div className="workspace-avatar">KL</div>

            <div>
              <strong>Kavya Labs</strong>
              <small>Enterprise</small>
            </div>

            <span>⌄</span>
          </div>
        </div>

        <nav className="admin-nav">
          <span className="admin-nav-label">
            CONTROL CENTER
          </span>

          <button
            className={activePage === "Overview" ? "active" : ""}
            onClick={() => setActivePage("Overview")}
          >
            <span>▦</span>
            Overview
          </button>

          <button
            className={activePage === "Users" ? "active" : ""}
            onClick={() => setActivePage("Users")}
          >
            <span>◉</span>
            Users
          </button>

          <button
            className={
              activePage === "Transactions" ? "active" : ""
            }
            onClick={() => setActivePage("Transactions")}
          >
            <span>⇄</span>
            Transactions
          </button>

          <button
            className={activePage === "Analytics" ? "active" : ""}
            onClick={() => setActivePage("Analytics")}
          >
            <span>◌</span>
            Analytics
          </button>

          <button
            className={activePage === "System" ? "active" : ""}
            onClick={() => setActivePage("System")}
          >
            <span>⚙</span>
            System
          </button>

          <span className="admin-nav-label second-label">
            ACCOUNT
          </span>

          <button>
            <span>◎</span>
            Settings
          </button>

          <Link to="/">
            <span>↪</span>
            Sign Out
          </Link>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-profile">
            <div className="profile-avatar">
              RM
            </div>

            <div>
              <strong>Rohan Mehta</strong>
              <span>Administrator</span>
            </div>

            <span>•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <span className="admin-breadcrumb">
              CONTROL CENTER / {activePage.toUpperCase()}
            </span>

            <h1>{activePage}</h1>

            <p>
              Monitor and manage your Kavya Labs environment.
            </p>
          </div>

          <div className="admin-header-actions">
            <button className="icon-button">
              ⌕
            </button>

            <button className="icon-button">
              ♧
            </button>

            <div className="header-avatar">
              RM
            </div>
          </div>
        </header>

        {/* KPI CARDS */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span>Total Users</span>
              <span className="stat-icon">◉</span>
            </div>

            <strong>12,842</strong>

            <div className="stat-bottom">
              <span className="positive">
                +12.8%
              </span>

              <span>vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Transactions</span>
              <span className="stat-icon">⇄</span>
            </div>

            <strong>84,291</strong>

            <div className="stat-bottom">
              <span className="positive">
                +18.4%
              </span>

              <span>vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Flagged Activity</span>

              <span className="stat-icon warning-icon">
                !
              </span>
            </div>

            <strong>124</strong>

            <div className="stat-bottom">
              <span className="warning-text">
                +4.2%
              </span>

              <span>requires review</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>System Health</span>

              <span className="stat-icon health-icon">
                ✓
              </span>
            </div>

            <strong>99.9%</strong>

            <div className="stat-bottom">
              <span className="positive">
                Healthy
              </span>

              <span>all systems operational</span>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="admin-content-grid">
          {/* ACTIVITY */}
          <div className="admin-panel activity-chart-panel">
            <div className="panel-header">
              <div>
                <span>ACTIVITY</span>
                <h2>System activity</h2>
              </div>

              <select defaultValue="7">
                <option value="7">
                  Last 7 days
                </option>

                <option value="30">
                  Last 30 days
                </option>

                <option value="90">
                  Last 90 days
                </option>
              </select>
            </div>

            <div className="big-number">
              84,291
              <span> events</span>
            </div>

            <div className="chart">
              <div className="chart-grid"></div>

              <div className="chart-line">
                <span style={{ left: "0%", bottom: "20%" }}></span>
                <span style={{ left: "8%", bottom: "32%" }}></span>
                <span style={{ left: "16%", bottom: "27%" }}></span>
                <span style={{ left: "25%", bottom: "45%" }}></span>
                <span style={{ left: "34%", bottom: "42%" }}></span>
                <span style={{ left: "43%", bottom: "61%" }}></span>
                <span style={{ left: "52%", bottom: "55%" }}></span>
                <span style={{ left: "61%", bottom: "73%" }}></span>
                <span style={{ left: "70%", bottom: "68%" }}></span>
                <span style={{ left: "79%", bottom: "82%" }}></span>
                <span style={{ left: "88%", bottom: "77%" }}></span>
                <span style={{ left: "98%", bottom: "91%" }}></span>
              </div>

              <div className="chart-bars">
                <i style={{ height: "28%" }}></i>
                <i style={{ height: "42%" }}></i>
                <i style={{ height: "35%" }}></i>
                <i style={{ height: "55%" }}></i>
                <i style={{ height: "48%" }}></i>
                <i style={{ height: "67%" }}></i>
                <i style={{ height: "61%" }}></i>
                <i style={{ height: "76%" }}></i>
                <i style={{ height: "71%" }}></i>
                <i style={{ height: "86%" }}></i>
                <i style={{ height: "81%" }}></i>
                <i style={{ height: "93%" }}></i>
              </div>
            </div>
          </div>

          {/* SYSTEM HEALTH */}
          <div className="admin-panel health-panel">
            <div className="panel-header">
              <div>
                <span>SYSTEM</span>
                <h2>Health</h2>
              </div>

              <span className="healthy-badge">
                ● Operational
              </span>
            </div>

            <div className="health-score">
              <strong>99.9%</strong>
              <span>overall uptime</span>
            </div>

            <div className="health-list">
              <div>
                <span>
                  <i className="status-dot"></i>
                  API
                </span>

                <strong>99.99%</strong>
              </div>

              <div>
                <span>
                  <i className="status-dot"></i>
                  Database
                </span>

                <strong>99.98%</strong>
              </div>

              <div>
                <span>
                  <i className="status-dot"></i>
                  AI Engine
                </span>

                <strong>99.94%</strong>
              </div>

              <div>
                <span>
                  <i className="status-dot"></i>
                  Storage
                </span>

                <strong>100%</strong>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT TRANSACTIONS */}
        <section className="admin-panel raw-data-panel">
          <div className="panel-header">
            <div>
              <span>RAW DATA</span>
              <h2>Recent transactions</h2>
            </div>

            <button className="table-button">
              View all →
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>TRANSACTION ID</th>
                  <th>USER</th>
                  <th>AMOUNT</th>
                  <th>TYPE</th>
                  <th>STATUS</th>
                  <th>TIME</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="mono">
                      {transaction.id}
                    </td>

                    <td>
                      {transaction.user}
                    </td>

                    <td className="amount">
                      {transaction.amount}
                    </td>

                    <td>
                      {transaction.type}
                    </td>

                    <td>
                      <span
                        className={`table-status ${transaction.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {transaction.status}
                      </span>
                    </td>

                    <td className="muted">
                      {transaction.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* USERS */}
        <section className="admin-panel raw-data-panel">
          <div className="panel-header">
            <div>
              <span>USER DIRECTORY</span>
              <h2>Recent users</h2>
            </div>

            <button className="table-button">
              Manage users →
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>STATUS</th>
                  <th>JOINED</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="mono">
                      {user.id}
                    </td>

                    <td>
                      <strong>{user.name}</strong>
                    </td>

                    <td className="muted">
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                    <td>
                      <span
                        className={`user-status ${
                          user.status === "Active"
                            ? "active-status"
                            : "inactive-status"
                        }`}
                      >
                        ● {user.status}
                      </span>
                    </td>

                    <td className="muted">
                      {user.joined}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}