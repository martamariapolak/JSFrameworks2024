import "./App.css";

// Import CharacterCount here
import CharacterCount from "./components/CharacterCount/CharacterCount";
//Import GuessTheNumber

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount/>
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        
      </div>
    </>
  );
}

export default App;
