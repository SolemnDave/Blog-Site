import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Sun } from "../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/Moon.svg";
import "./index.scss";
import "./media.scss";

function Home() {
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

  return (
    <div className="home-page">
      <header className="header">
        <p>Solemn Dave</p>
      </header>
      <section className="under-header">
        <Link to="/">
          <img
            src="/atom1.png"
            alt="Descriptive Alt Text"
            className="under-header-image"
          />
        </Link>
        <img
          src="/hamburger-icon.png"
          alt="Menu"
          className="hamburger-icon"
          onClick={toggleMenu}
        />

        <div
          className={`dropdown-menus ${
            isMenuOpen ? "open" : ""
          } desktop-dropdown`}
        >
          <select
            className="dropdown"
            id="labs-dropdown"
            onChange={handleLabsDropdownChange}
          >
            <option value="">Books</option>
            <option value="/book-one">AWS Unleashed</option>
          </select>
          <select
            className="dropdown"
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

      <section className={`media-section ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <div className="dropdown-menus mobile-dropdown">
            <select
              className="dropdown"
              id="labs-dropdown-mobile"
              onChange={handleLabsDropdownChange}
            >
              <option value="">Books</option>
              <option value="/book-one">AWS Unleashed</option>
            </select>
            <select
              className="dropdown"
              id="courses-dropdown-mobile"
              onChange={handleCoursesDropdownChange}
            >
              <option value="">Courses</option>
              <option value="/course-one">CEA</option>
            </select>
          </div>
        )}
      </section>

      <section className="about-section">
        <div className="content">
          <h2>Project Blog</h2>
          <p>
            Project Blog is a website dedicated to documenting the various books
            <br></br> and courses I engage in. I aim for it to provide an
            in-depth look at my <br></br>process, the tools I use, and the
            lessons I've learned along the way.
          </p>
          <p>
            The site aims to share my experiences transparently It's more than
            just
            <br></br> a record of notes or tasks, it's a narrative of personal
            growth and discovery.
          </p>
          <p className="slogan">Debugging the world, one line at a time.</p>
        </div>

        <div className="image-container">
          <img src="/Digitalbook.png" alt="Digital Book" />
        </div>
      </section>

      <section className="home-mid-section">
        <p className="quote">
          "Eventually, the pages of theory must give way to the hands-on journey
          of practice, for it is in the doing that we truly learn."
        </p>
        <p className="quote-by">~ Solemn Dave</p>
      </section>

      <section className="mid-section">
        <h2>Navigate to ... </h2>
        <div className="mid-images">
          <a
            href="https://solemndave-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/online-resume.png" alt="HTML5" />
          </a>
          <a
            href="https://github.com/SolemnDave/Blog-Site/blob/main/README.md"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/github.png" alt="SolemnDave's GitHub" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Solemn Dave • Copyright © 2023</p>
        <div className="footer-images">
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
            href="https://solemndave-portfolio.vercel.app"
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

export default Home;
