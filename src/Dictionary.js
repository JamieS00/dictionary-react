import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

/*
1.keep track of input 
2.API call 
*/

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [wordData, setwordData] = useState(null); //Result component

  const search = (event) => {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    //API call
    let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
    let Url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(Url).then(handleResponse);
  };
  //1. Tracks user input
  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  //2. Response from API
  const handleResponse = (response) => {
    setwordData(response.data);
    // console.log(response.data.meanings[1]);

    // setwordData({
    //   noun: response.data.meanings[1].partOfSpeech,
    //   nounDef: response.data.meanings[1].definition,
    //   phonetic: response.data.phonetic,
    //   nounSynonyms: response.data.meanings[1].synonyms,
    // });

    // console.log(response.data.meanings[1].partOfSpeech); //noun
    // console.log(response.data.meanings[1].definition); //def
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
        <Results results={wordData} />
      </div>
    </div>
  );
};
export default Dictionary;
