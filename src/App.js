import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;