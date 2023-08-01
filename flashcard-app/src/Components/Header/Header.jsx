import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import Sets from "../Sets/Sets.jsx";
import Train from "../Train/Train.jsx";
import Test from "../Test/Test.jsx";

function Header(props) {
  return (
    <div>
      <Router>
        <div>
          <header>
            <Link to="/">Sets</Link>
            <Link to="/train">Train</Link>
            <Link to="/test">Test</Link>
          </header>
          <Routes>
            <Route path="/train" element={<Train />} />
            <Route path="/" element={<Sets />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Header;
