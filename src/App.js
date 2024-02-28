import SearchBar from "./components/SearchBar";
import { useState } from "react";
import React from "react";
import { MyProvider } from "./context/Attributes";

//console.log(cityName);

function App() {
  return (
    <div>
      <MyProvider>
        <SearchBar/>
      </MyProvider>
    </div>
  );
}

export default App;
