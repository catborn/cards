import React from "react";
import "./App.css";
import data from "./components/data";
import Cards from "./components/Cards";

function App() {
  return (
    <React.Fragment className="App">
      {data.map((data) => {
        return <Cards title={data.title} />;
      })}
    </React.Fragment>
  );
}

export default App;
