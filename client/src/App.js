import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";

const Landing = () => <h1>Landing</h1>;
const Surveys = () => <h1>Surveys</h1>;
const SurveysNew = () => <h1>Surveys New</h1>;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Surveys} />
            <Route path="/surveys/new" component={SurveysNew} />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
