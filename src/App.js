import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <h1>Dictionary App</h1>
        <main className="mt-4">
          <Dictionary />
        </main>

        <footer className="mt-5">
          <p>
            This project was coded by Jamie Singleton and is{" "}
            <a
              href="https://github.com/JamieS00/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://js-dictionary-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
