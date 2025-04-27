import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

/*
1.keep track of input 
2.API call 
*/

const Dictionary = (props) => {
  const [keyword, setKeyword] = useState(props.default);
  const [wordData, setwordData] = useState(null); //Result component
  const [loaded, setLoaded] = useState(false);

  //show word as default
  const search = () => {
    //API call
    let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
    let Url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(Url).then(handleResponse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  //1. Tracks user input
  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  //2. Response from API
  const handleResponse = (response) => {
    setwordData(response.data);
  };

  const Loaded = () => {
    setLoaded(true);
    search();
  };

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label> What word do you want to look up?</label>
            <input
              type="search"
              placeholder="sunshine"
              onChange={handleKeyword}
              defaultValue={props.default}
              required
            />
          </form>
          <small className="hint mt-2">i.e. family, plants, joy</small>
        </section>
        <br />

        <Results results={wordData} />
      </div>
    );
  } else {
    Loaded();
    return "Loading";
  }
};
export default Dictionary;
