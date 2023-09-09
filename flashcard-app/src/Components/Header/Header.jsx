import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div>
        <header>
          <Link to="/">Sets</Link>
          <Link to="/train">Train</Link>
          <Link to="/test">Test</Link>
        </header>
      </div>
    </div>
  );
};

export default Header;
