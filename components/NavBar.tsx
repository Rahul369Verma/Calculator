import React from "react";
import Link from "next/link";
import "./Navbar.module.css";

const HeaderStyle = {
  marginLeft: "10px",
  color: "bisque",
};

const NavBar = () => (
  <>
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Calculator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-5">
                <Link className="nav-link active" href="/">
                  <a style={{ textDecoration: "none", color: "white" }}>Home</a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" href="history">
                  <a style={{ textDecoration: "none", color: "white" }}>
                    History
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/trash">
                  <a style={{ textDecoration: "none", color: "white" }}>
                    Trash
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>
);

export default NavBar;
