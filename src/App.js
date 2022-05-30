import logo from "./logo.svg";
import "./App.css";
import BeginnerButton from "./components/BeginnerButton/BeginnerButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeginnerButton buttonText="Post!" displaySpinner={true} />
        <BeginnerButton buttonText="Edit" size="lg" />
        <BeginnerButton buttonText="Cancel" variant="secondary" />
      </header>
    </div>
  );
}

export default App;
