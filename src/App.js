import React from "react";
import "./App.css";
import data from "./components/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            title={data.title}
            price={data.price}
            speed={data.speed}
            color={data.color}
          />
        );
      })}
    </div>
  );
}

export default App;
