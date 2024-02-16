import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([{}]);

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

  return (
    <>
      <p>Hello World</p>
      <div>
        {typeof data.items === "undefined" ? (
          <p>Loading..</p>
        ) : (
          data.items.map((item, i) => <p key={i}>{item}</p>)
        )}
      </div>
    </>
  );
}

export default App;
