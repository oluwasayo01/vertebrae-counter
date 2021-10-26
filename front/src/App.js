import React, { useEffect } from "react";
import ImageDisplay from "./imageDisplay";
// import ImageContext from "./imageContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import Detections from "./Detections";

const App = () => {
  // const state = useContext(ImageContext);

  useEffect(() => {}, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ImageDisplay} />
        <Route path="/detections/" component={ImageDisplay} />
      </Switch>
    </Router>
    // <ImageContext.Provider value={state}>
    //   <ImageDisplay />
    // </ImageContext.Provider>
  );
};

export default App;
