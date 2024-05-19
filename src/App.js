import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenHandler from "./ScreenHandler";

function App() {
  return (
    <div className="App">
      <Router>
        <ScreenHandler />
      </Router>
    </div>
  );
}

export default App;
