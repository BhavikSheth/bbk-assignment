import './App.css';

import {Route, Switch} from "react-router-dom"

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
