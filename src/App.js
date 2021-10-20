import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Random from "./components/Random";
import Dinner from "./components/Dinner";
import Desserts from "./components/Desserts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home} />
        <Route path="/random" component={Random} />
        <Route path="/dinner" component={Dinner} />
        <Route path="/desserts" component={Desserts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
