import React from "react";

const Header = () => {
  return (
    <header className="text-white bg-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-xs-3 col-lg-2 text-center">
            <img
              src="../assets/my-profile-photo.jpg"
              alt="My Profile"
              className="border border-5 rounded-circle img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="col text-center text-lg-start">
            <h1>Adolfo Jr. Villegas</h1>
            <p className="lead">
              Civil-Structural Designer / Full-Stack Software Developer
            </p>
            <ul className="list-inline">
              <li className="list-inline-item my-2">
                <a
                  href="mailto:adolfojr.villlegas.m@gmail.com"
                  className="fs-5 link-light text-decoration-none"
                >
                  <i className="bi bi-envelope pe-1"></i>
                  <span className="text-center">
                    adolfojr.villegas.m@gmail.com
                  </span>
                </a>
              </li>
              <li className="list-inline-item my-2">
                <a
                  href="https://www.linkedin.com/in/adolfojr-villegas-m/"
                  target="_blank"
                  rel="noreferrer"
                  className="fs-5 link-light text-decoration-none"
                >
                  <i className="bi bi-linkedin pe-1"></i> LinkedIn
                </a>
              </li>
              <li className="list-inline-item my-2">
                <a
                  href="https://github.com/AdolfoJrV"
                  target="_blank"
                  rel="noreferrer"
                  className="fs-5 link-light text-decoration-none"
                >
                  {" "}
                  <i className="bi bi-github pe-1"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
