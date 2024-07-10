import "./App.css";
import Welcome from "./Welcome/Welcome";
import Heading from "./Heading";

function App() {
  return (<div className="App">
<Welcome name="marta"/>
<Welcome name="marta"/>
<Welcome/>
<Heading>Cokolwiek tu jest to sa props.children</Heading>
  </div>
  )
}

export default App;
