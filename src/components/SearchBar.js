import React, { useContext } from "react";
import  useState from "react";
import MyContext from "../context/Attributes";
import Results from "./Results";

function SearchBar() {
  const data = useContext(MyContext);
  const [resultsRender, setResultsRender] = useState(false);
  const [name, setName] = useState("");
  const handleClick = (e) => {
    console.log("eski deger:", data.value);
    data.setValue(name);
    console.log("yeni deger", data.value);
    setResultsRender(true);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      Enter a city name:
      <input
        onChange={handleChange}
        type="text"
        defaultValue="şehir ismi giriniz"
      />
      <button type="text" id="name" onClick={handleClick}>
        ara
      </button>
      {resultsRender && <Results/>}
    </div>
  );
}

export default SearchBar;
