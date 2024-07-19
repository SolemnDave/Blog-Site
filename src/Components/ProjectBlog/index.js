import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Sun } from "../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/Moon.svg";
import "./index.scss";
import "./media.scss";

function ProjectBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  const images1 = ["/ProjectBlogArch.png", "/vp.png", "/nl.png"];

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [selectedTheme]);

  const handleLabsDropdownChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  };

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);

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

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) =>
        prevIndex === images1.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(intervalId1);
  }, [images1.length]);

  return (
    <div className="projectblog-page">
      <header className="pb-header">
        <p>Solemn Dave</p>
      </header>
      <section className="pb-under-header">
        <Link to="/">
          <img
            src="/atom1.png"
            alt="Descriptive Alt Text"
            className="pb-under-header-image"
          />
        </Link>
        <img
          src="/hamburger-icon.png"
          alt="Menu"
          className="pb-hamburger-icon"
          onClick={toggleMenu}
        />

        {/* Desktop Dropdown Menus - these will remain as is */}
        <div
          className={`pb-dropdown-menus ${
            isMenuOpen ? "open" : ""
          } desktop-dropdown`}
        >
          <select
            className="pb-dropdown"
            id="labs-dropdown"
            onChange={handleLabsDropdownChange}
          >
            <option value="">Books</option>
            <option value="/book-one">AWS Unleashed</option>
          </select>
          <select
            className="pb-dropdown"
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
      {/* Mobile Dropdown Menus in Media-Section - this will only render when the hamburger icon is clicked */}
      <section className={`pb-media-section ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <div className="pb-dropdown-menus mobile-dropdown">
            <select
              className="pb-dropdown"
              id="labs-dropdown-mobile"
              onChange={handleLabsDropdownChange}
            >
              <option value="">Books</option>
              <option value="/book-one">AWS Unleashed</option>
            </select>
            <select
              className="pb-dropdown"
              id="courses-dropdown-mobile"
              onChange={handleCoursesDropdownChange}
            >
              <option value="">Courses</option>
              <option value="/course-one">CEA</option>
            </select>
          </div>
        )}
      </section>

      <section className="projectblog-section">
        <div className="content">
          <h1>I made this project because...</h1>
          <p>
            I wanted to make something of my own from the ground up with
            <br></br> services that I never used before to really challenge
            myself.
          </p>
          <p>
            This project presented a fantastic opportunity to practice frontend{" "}
            <br></br>
            development, host a website on a Linux server, and reinforce my{" "}
            <br></br>
            understanding of network-related cloud concepts.
          </p>
        </div>

        <div className="pb-container">
          <img
            src={images1[currentImageIndex1]}
            alt="AWS Architecture Visualization"
          />
        </div>
      </section>

      <section className="chapter-section">
        <h4>Find out more</h4>
        <div className="content-with-images">
          <div className="chapter-container">
            <div className="chapter-item">
              <div className="thumbnail">
                <img src="/Digitalbook.png" alt="Book Thumbnail" />
              </div>
              <div className="chapter-details">
                <Link to="/project-blog" className="title">
                  Project Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-end-section">
        <h2>This project was made with ... </h2>
        <div className="pb-end-images">
          <img src="/html-5.png" alt="Description1" />
          <img src="/css.png" alt="Description2" />
          <img src="/java-script.png" alt="Description3" />

          <img src="/logo.png" alt="Description4" />
          <img src="/linux.png" alt="Description5" />
          <img src="/github.png" alt="Description6" />
        </div>
      </section>

      <footer className="pb-footer">
        <p>Solemn Dave • Copyright © 2023</p>
        <div className="pb-footer-images">
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

export default ProjectBlog;
