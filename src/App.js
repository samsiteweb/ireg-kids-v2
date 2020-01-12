import React from "react";
import "./App.css";
import Login from "./pages/loginPage/login";
// devs
import { hot } from "react-hot-loader/root";

import AccountReg from "./pages/accountRegPage/accountReg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PassReset from "./pages/passReset/passReset";

import { Provider } from "react-redux";
import iRegReduxStore from "./redux/store";

function App() {
  return (
    <div className='App'>
      <Provider store={iRegReduxStore}>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/accountReg' component={AccountReg}></Route>
            <Route path='/resetPassword' component={PassReset}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default hot(App);
