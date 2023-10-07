import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Sets from "./Pages/Sets/Sets.jsx";
import TrainPage from "./Pages/Train/TrainPage.jsx";
import Test from "./Pages/Test/Test.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Sets />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<p>Such page does not exist!</p>} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <div id="app"></div>
    </div>
  );
}

export default App;
