import logo from "./logo.svg";
import "./App.css";
import BeginnerButton from "./components/BeginnerButton/BeginnerButton";
import IntermediateButton from "./components/IntermediateButton/IntermediateButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeginnerButton
          buttonText="Post!"
          displaySpinner={true}
          clickFunction={() => alert("post")}
        />
        <BeginnerButton
          buttonText="Edit"
          size="lg"
          clickFunction={() => alert("edit")}
        />
        <BeginnerButton
          buttonText="Cancel"
          variant="secondary"
          clickFunction={() => alert("hello")}
        />
      </header>
      <header className="App-header">
        {/* Self closing, like <img /> */}
        {/* <IntermediateButton /> */}
        {/* Make the button have opening tag, closing, like <button></button> */}
        <IntermediateButton variant="secondary">
          Post! <a href="https://google.com">GOOGLE IT</a>
        </IntermediateButton>
        <IntermediateButton variant="primary">
          {true ? <progress value={50} max={100} /> : "Edit!"}
        </IntermediateButton>
        <IntermediateButton variant="danger" size="lg">
          Cancel!
        </IntermediateButton>
      </header>
    </div>
  );
}

export default App;
