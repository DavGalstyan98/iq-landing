import "./App.css";
import "../src/scss/global.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Welcome from "./Pages/welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    </div>
  );
}

export default App;
