import "./index.scss";
import "./media.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/Moon.svg";
import plusbutton from "../../assets/images/plus-button.png";
import minusbutton from "../../assets/images/minus-button.png";
import { chapterContent } from "./ChapterContent";

function BookOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("chapter1");
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

  function selectChapter(chapterId, event) {
    if (window.innerWidth < 1000) {
      event.preventDefault();
    }
    setSelectedChapter(chapterId);
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
      <header className="b1-header">
        <p>Solemn Dave</p>
      </header>

      <section className="b1-under-header">
        <Link to="/">
          <img
            src="/atom1.png"
            alt="Descriptive Alt Text"
            className="b1-under-header-image"
          />
        </Link>
        <img
          src="/hamburger-icon.png"
          alt="Menu"
          className="b1-hamburger-icon"
          onClick={toggleMenu}
        />

        <div
          className={`b1-dropdown-menus ${
            isMenuOpen ? "open" : ""
          } desktop-dropdown`}
        >
          <select
            className="b1-dropdown"
            id="labs-dropdown"
            onChange={handleLabsDropdownChange}
          >
            <option value="">Books</option>
            <option value="/book-one">AWS Unleashed</option>
          </select>
          <select
            className="b1-dropdown"
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
      <section className={`b1-media-section ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <div className="b1-dropdown-menus mobile-dropdown">
            <select
              className="b1-dropdown"
              id="labs-dropdown-mobile"
              onChange={handleLabsDropdownChange}
            >
              <option value="">Books</option>
              <option value="/book-one">AWS Unleashed</option>
            </select>
            <select
              className="b1-dropdown"
              id="courses-dropdown-mobile"
              onChange={handleCoursesDropdownChange}
            >
              <option value="">Courses</option>
              <option value="/course-one">CEA</option>
            </select>
          </div>
        )}
      </section>

      <div className="b1-content-wrapper">
        {showNav && (
          <nav className="b1-content-nav">
            <h1>Chapters</h1>
            <ul>
              <li
                className={selectedChapter === "chapter1" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter1", e)}
              >
                <a href="#chapter1">
                  {windowWidth < 1000 ? "CH1" : "Chapter 1"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter2" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter2", e)}
              >
                <a href="#chapter2">
                  {windowWidth < 1000 ? "CH2" : "Chapter 2"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter3" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter3", e)}
              >
                <a href="#chapter3">
                  {windowWidth < 1000 ? "CH3" : "Chapter 3"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter4" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter4", e)}
              >
                <a href="#chapter4">
                  {windowWidth < 1000 ? "CH4" : "Chapter 4"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter5" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter5", e)}
              >
                <a href="#chapter5">
                  {windowWidth < 1000 ? "CH5" : "Chapter 5"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter6" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter6", e)}
              >
                <a href="#chapter6">
                  {windowWidth < 1000 ? "CH6" : "Chapter 6"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter7" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter7", e)}
              >
                <a href="#chapter7">
                  {windowWidth < 1000 ? "CH7" : "Chapter 7"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter8" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter8", e)}
              >
                <a href="#chapter8">
                  {windowWidth < 1000 ? "CH8" : "Chapter 8"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter9" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter9", e)}
              >
                <a href="#chapter9">
                  {windowWidth < 1000 ? "CH9" : "Chapter 9"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter10" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter10", e)}
              >
                <a href="#chapter10">
                  {windowWidth < 1000 ? "CH10" : "Chapter 10"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter11" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter11", e)}
              >
                <a href="#chapter11">
                  {windowWidth < 1000 ? "CH11" : "Chapter 11"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter12" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter12", e)}
              >
                <a href="#chapter12">
                  {windowWidth < 1000 ? "CH12" : "Chapter 12"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter13" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter13", e)}
              >
                <a href="#chapter13">
                  {windowWidth < 1000 ? "CH13" : "Chapter 13"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter14" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter14", e)}
              >
                <a href="#chapter14">
                  {windowWidth < 1000 ? "CH14" : "Chapter 14"}
                </a>
              </li>
              <li
                className={selectedChapter === "chapter15" ? "selected" : ""}
                onClick={(e) => selectChapter("chapter15", e)}
              >
                <a href="#chapter15">
                  {windowWidth < 1000 ? "CH15" : "Chapter 15"}
                </a>
              </li>
              <li
                className={selectedChapter === "Overall" ? "selected" : ""}
                onClick={(e) => selectChapter("Overall", e)}
              >
                <a href="#Overall Thoughts">
                  {windowWidth < 1000 ? "OVA" : "Overall Thoughts"}
                </a>
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
          {chapterContent[selectedChapter].content}

          <div className="bottom-group">
            <div className="left-group">
              <h1>AWS Unleashed</h1>
              <p className="author">By Harrison Quill</p>
            </div>
            <div className="right-group">
              <a
                href="https://www.amazon.com/AWS-Unleashed-Mastering-Services-Engineers/dp/B0CHCP31RG/ref=sr_1_1?crid=1U8R9TZMC7TI7&keywords=aws+unleashed&qid=1704751806&sprefix=aws+undlea%2Caps%2C85&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/open-book.png"
                  alt="AWS Unleashed book"
                  className="main-image"
                />
              </a>
            </div>
          </div>
        </main>
      </div>

      <footer className="b1-footer">
        <p>Solemn Dave • Copyright © 2023</p>
        <div className="b1-footer-images">
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
            href="https://resume.solemndave.cloud/"
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

export default BookOne;
