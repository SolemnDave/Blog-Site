import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProjectBlog from "./Components/ProjectBlog";
import BookOne from "./Components/BookOne";
import CourseOne from "./Components/CourseOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project-blog" element={<Home />} />
        <Route path="/" element={<ProjectBlog />} />
        <Route path="/book-one" element={<BookOne />} />
        <Route path="/course-one" element={<CourseOne />} />
      </Routes>
    </Router>
  );
}

export default App;
