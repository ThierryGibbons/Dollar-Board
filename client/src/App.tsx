import React, { useState, useEffect } from "react";
import "./App.css";
import Terminal from "./components/Terminal";

function App() {
  const [data, setData] = useState([{}]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/tempRoute")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  // Post data to the backend
  const postData = () => {
    fetch("http://127.0.0.1:5000/tempRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: "two" }), // Replace with your data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <nav>
        <Terminal />
      </nav>

      <p>Hello World</p>
      <div>
        {typeof data.items === "undefined" ? (
          <p>Loading..</p>
        ) : (
          data.items.map((item, i) => <p key={i}>{item}</p>)
        )}
      </div>

      {/* Button */}
      <div>
        <button onClick={postData}>Click Me</button>
      </div>
    </>
  );
}

export default App;
