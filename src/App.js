import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Desserts from "./components/Desserts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
        <Route path="/" exact component={HomePage}/>
        <Route path="/home" component={Home} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/dinner" component={Dinner} />
        <Route path="/desserts" component={Desserts} />
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
