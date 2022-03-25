import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Describe from "./Components/Description";

function App() {
  return (
    <div className="card">
      <Header />
      <Describe />
      <Footer />
    </div>
  );
}

export default App;
