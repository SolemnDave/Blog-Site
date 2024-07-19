import "./index.scss";
import "./media.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/Moon.svg";
import plusbutton from "../../assets/images/plus-button.png";
import minusbutton from "../../assets/images/minus-button.png";
import { courseContent } from "./CourseContent";

function CourseOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("course1");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(true);

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [selectedTheme]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function selectcourse(courseId, event) {
    if (window.innerWidth < 1000) {
      event.preventDefault();
    }
    setSelectedCourse(courseId); // Corrected function name
  }

  const handleLabsDropdownChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  };

  const handleCoursesDropdownChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const toggleNavVisibility = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="labone-page">
      <header className="c1-header">
        <p>Solemn Dave</p>
      </header>

      <section className="c1-under-header">
        <Link to="/">
          <img
            src="/atom1.png"
            alt="Descriptive Alt Text"
            className="c1-under-header-image"
          />
        </Link>
        <img
          src="/hamburger-icon.png"
          alt="Menu"
          className="c1-hamburger-icon"
          onClick={toggleMenu}
        />

        <div
          className={`c1-dropdown-menus ${
            isMenuOpen ? "open" : ""
          } desktop-dropdown`}
        >
          <select
            className="c1-dropdown"
            id="labs-dropdown"
            onChange={handleLabsDropdownChange}
          >
            <option value="">Books</option>
            <option value="/book-one">AWS Unleashed</option>
          </select>
          <select
            className="c1-dropdown"
            id="courses-dropdown"
            onChange={handleCoursesDropdownChange}
          >
            <option value="">Courses</option>
            <option value="/course-one">CEA</option>
          </select>
        </div>

        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
            defaultChecked={selectedTheme === "dark"}
          />
          <label className="dark_mode_label" htmlFor="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
      </section>
      <section className={`c1-media-section ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <div className="c1-dropdown-menus mobile-dropdown">
            <select
              className="c1-dropdown"
              id="labs-dropdown-mobile"
              onChange={handleLabsDropdownChange}
            >
              <option value="">Books</option>
              <option value="/book-one">AWS Unleashed</option>
            </select>
            <select
              className="c1-dropdown"
              id="courses-dropdown-mobile"
              onChange={handleCoursesDropdownChange}
            >
              <option value="">Courses</option>
              <option value="/course-one">CEA</option>
            </select>
          </div>
        )}
      </section>

      <div className="c1-content-wrapper">
        {showNav && (
          <nav className="c1-content-nav">
            <h1>Modules</h1>
            <ul>
              <li
                className={selectedCourse === "course1" ? "selected" : ""}
                onClick={(e) => selectcourse("course1", e)}
              >
                <a href="#course1">{windowWidth < 1000 ? "M1" : "Module 1"}</a>
              </li>
            </ul>
          </nav>
        )}
        <main className="main-content">
          <img
            src={showNav ? minusbutton : plusbutton}
            alt="Toggle Icon"
            onClick={toggleNavVisibility}
            style={{ cursor: "pointer" }}
          />
          {courseContent[selectedCourse].content}

          <div className="bottom-group">
            <div className="left-group">
              <h1>Cloud Engineer Academy</h1>
              <p className="author">Tech With Soleyman</p>
            </div>
            <div className="right-group">
              <a
                href="https://cloudengineeracademy.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/course.png"
                  alt="AWS Unleashed book"
                  className="main-image"
                />
              </a>
            </div>
          </div>
        </main>
      </div>

      <footer className="c1-footer">
        <p>Solemn Dave • Copyright © 2023</p>
        <div className="c1-footer-images">
          <a
            href="https://www.linkedin.com/in/david-reyes-jr-130549210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="Description1" />
          </a>
          <a
            href="https://github.com/SolemnDave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="Description2" />
          </a>
          <a
            href="https://solemndave-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/online-resume.png" alt="Description2" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default CourseOne;
