import React, { useContext } from "react";
import profilePhoto from "../assets/my-profile-photo.jpg";
import ThemeContext from "./ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const onThemeButtonClicked = () => {
    toggleTheme();
  };

  return (
    <header
      className={
        isDarkMode
          ? "text-light custom-bg-image-dm"
          : "text-black custom-bg-image"
      }
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-xs-3 col-lg-2 text-center">
            <img
              src={profilePhoto}
              alt="My Profile"
              className="border border-5 rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="col text-center text-lg-start">
            <h1 className={isDarkMode ? "h1-dm" : ""}>Adolfo Jr. Villegas</h1>
            <p className="lead">
              Civil-Structural Designer / Full Stack Software Developer
            </p>
            <ul className="list-inline">
              <li className="list-inline-item my-2">
                <a
                  href="mailto:adolfojr.villlegas.m@gmail.com"
                  className={
                    isDarkMode
                      ? "fs-5 custom-white-link text-decoration-none"
                      : "fs-5 custom-black-link text-decoration-none"
                  }
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
                  className={
                    isDarkMode
                      ? "fs-5 custom-white-link text-decoration-none"
                      : "fs-5 custom-black-link text-decoration-none"
                  }
                >
                  <i className="bi bi-linkedin pe-1"></i> LinkedIn
                </a>
              </li>
              <li className="list-inline-item my-2">
                <a
                  href="https://github.com/AdolfoJrV"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    isDarkMode
                      ? "fs-5 custom-white-link text-decoration-none"
                      : "fs-5 custom-black-link text-decoration-none"
                  }
                >
                  <i className="bi bi-github pe-1"></i> GitHub
                </a>
              </li>
              <li className="list-inline-item my-2">
                <button
                  className={
                    isDarkMode
                      ? "modeButton-dm btn-center-icon"
                      : "modeButton btn-center-icon"
                  }
                  size="sm"
                  onClick={onThemeButtonClicked}
                >
                  {isDarkMode ? <CiLight /> : <CiDark />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
