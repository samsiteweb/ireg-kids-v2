import React from "react";
import "./App.css";
import Login from "./pages/loginPage/login";
import { hot } from "react-hot-loader/root";

import AccountReg from "./pages/accountRegPage/accountReg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/accountReg' component={AccountReg}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
