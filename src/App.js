import homePageBackground from "./components/images/cookingBackground.jpeg";
import homePageBackground2 from "./components/images/cookingCounter.jpeg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Random from "./components/Random";
import Dinner from "./components/Dinner";
import Desserts from "./components/Desserts";
import Shop from "./components/Shop";
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
        {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h1 className="HomePageHeading">Brandon's Recipes</h1>
    <img className="HomePageImage" src={homePageBackground2} alt="Spices Image"/>
  </div>
);

export default App;
