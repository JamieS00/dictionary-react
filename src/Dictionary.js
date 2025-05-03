import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import Images from "./Images";

/*
1.keep track of input 
2.API call 
*/

const Dictionary = (props) => {
  const [keyword, setKeyword] = useState(props.default);
  const [wordData, setwordData] = useState(null); //Result component
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null); //Image Component

  const handleImageResponse = (response) => {
    // console.log("INSIDE HANDLE IMAGE FUNCTION");
    // console.log(response.data.photos);
    setImage(response.data.photos);
  };

  const search = () => {
    //API call
    let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
    let Url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(Url).then(handleResponse);

    //Image API
    let ImageURL = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(ImageURL).then(handleImageResponse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  //1. Tracks user input
  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  //2. Response from Dict API
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
              className="mb-2"
              type="search"
              placeholder="sunshine"
              onChange={handleKeyword}
              defaultValue={props.default}
              required
            />
          </form>
          <small className="hint">i.e. family, plants, joy</small>
        </section>
        <br />

        <Results results={wordData} />
        <br />
        <Images photos={image} />
      </div>
    );
  } else {
    Loaded();
    return "Loading";
  }
};
export default Dictionary;
