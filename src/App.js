import logo from "./logo.svg";
import "./App.css";
import BeginnerButton from "./components/BeginnerButton/BeginnerButton";
import IntermediateButton from "./components/IntermediateButton/IntermediateButton";
import EasyLifeButton from "./components/EasyLifeButton/EasyLifeButton";
import Card from "./components/Card/Card";
import { H2 } from "./components/Typography/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H2>Beginner</H2>
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
        <h2>INTERMEDIATE</h2>
        {/* Self closing, like <img /> */}
        {/* <IntermediateButton /> */}
        {/* Make the button have opening tag, closing, like <button></button> */}
        <IntermediateButton variant="secondary">
          Post! <a href="https://google.com">GOOGLE IT</a>
        </IntermediateButton>
        <IntermediateButton
          variant="primary"
          disabled={true}
          onClick={() => alert("Hello")}
        >
          {true ? <progress value={50} max={100} /> : "Edit!"}
        </IntermediateButton>
        <IntermediateButton
          variant="danger"
          size="lg"
          type="reset"
          onClick={() => alert("HELLO WORLD")}
          onMouseOver={() => alert("HOVER??")}
          className="BLA"
        >
          Cancel!
        </IntermediateButton>
      </header>
      <header className="App-header">
        <Card>
          <h2>Easy life</h2>
          <EasyLifeButton variant="secondary">
            Post! <a href="https://google.com">GOOGLE IT</a>
          </EasyLifeButton>
          <EasyLifeButton
            variant="primary"
            disabled={true}
            onClick={() => alert("Hello")}
          >
            {true ? <progress value={50} max={100} /> : "Edit!"}
          </EasyLifeButton>
          <EasyLifeButton
            variant="danger"
            size="lg"
            type="reset"
            onClick={() => alert("HELLO WORLD")}
            onMouseOver={() => alert("HOVER??")}
            className="BLA"
          >
            Cancel!
          </EasyLifeButton>
        </Card>
      </header>
    </div>
  );
}

export default App;
