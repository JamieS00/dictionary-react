import React, { useState } from "react";
import "./Dictionary.css";
/*
1.keep track of input 
2.read from API */

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const search = (event) => {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  };
  //1. Keep track of input
  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className="Dictionary">
      <div className="search-section">
        <h2 className="mb-4">What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            className="search-box"
            type="search"
            placeholder="sunset"
            onChange={handleKeyword}
            required
          />
        </form>

        <p className="mt-3">i.e. wine, coding, love</p>
      </div>
    </div>
  );
};
export default Dictionary;
