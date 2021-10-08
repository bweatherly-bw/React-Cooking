import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Desserts from "./Desserts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
        <Route path="/" exact component={HomePage}/>
        <Route path="/Home" component={Home} />
        <Route path="/Breakfast" component={Breakfast} />
        <Route path="/Dinner" component={Dinner} />
        <Route path="/Desserts" component={Desserts} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h1>testing home page</h1>
  </div>
);

export default App;
