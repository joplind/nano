import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Phrase from "./components/phase";
import App from "./App.js";

import "./index.css";
import JsonPage from "./components/json";
import Keystore from "./components/keystore";

const Index = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/phrase" component={Phrase} />
          <Route exact path="/keystore" component={Keystore} />
          <Route exact path="/private" component={JsonPage} />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
