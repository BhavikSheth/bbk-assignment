import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Weather from "./pages/Weather/Weather";
import WeatherOnLoad from "./pages/WeatherOnLoad/WeatherOnLoad";

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/weather-on-load">
          <WeatherOnLoad />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
