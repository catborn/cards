import React from "react";
import "./App.css";
import data from "./components/data";
import Card from "./components/Card";

function App() {
  return (
    <React.Fragment className="App">
      {data.map((data) => {
        return (
          <Card
            title={data.title}
            price={data.price}
            speed={data.speed}
            color={data.color}
          />
        );
      })}
    </React.Fragment>
  );
}

export default App;
