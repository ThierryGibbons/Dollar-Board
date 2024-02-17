import React, { useState, useEffect } from "react";
import "./App.css";
import Chatbox from "./components/Chatbox";

function App() {
  const [data, setData] = useState([{}]);

  return (
    <div>
      <div className="App">
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
