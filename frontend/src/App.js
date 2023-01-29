import React, { useEffect } from "react";
import ImageDisplay from "./components/ImageDisplay/imageDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Detections from "./Detections";

const App = () => {
  useEffect(() => {}, []);

  return (
    <Router>
      <Switch>
        <Route path="/home/" component={Home} />
        <Route exact path="/" component={ImageDisplay} />
        <Route path="/detections/" component={ImageDisplay} />
      </Switch>
    </Router>
  );
};

export default App;
