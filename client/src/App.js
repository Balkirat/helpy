import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";

const Surveys = () => <h1>Surveys</h1>;
const SurveysNew = () => <h1>Surveys New</h1>;

class App extends Component {

  componentDidMount(){
    console.log("props",this.props)
      this.props.fetchUser();
  }

  render() {
    return (
      <div className="App ">
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
}

export default connect(null, actions)(App);
