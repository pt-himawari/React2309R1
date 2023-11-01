import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fs-4 navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/formContact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formBooks">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formMail">
                  Mail
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formMedical">
                  Medical
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
