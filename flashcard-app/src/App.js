import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sets from "./Pages/Sets/Sets.js";
import TrainPage from "./Pages/Train/TrainPage.js";
import Test from "./Pages/Test/Test.js";

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
          </Routes>
          <Footer />
        </div>
      </Router>
      <div id="app"></div>
    </div>
  );
}

export default App;
