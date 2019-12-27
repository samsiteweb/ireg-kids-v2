import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import LoginComponent from "./components/login.comp";

function App() {
  return (
    <div className='App'>
      {/* <Button type='primary'>Button</Button> */}
      <LoginComponent />
    </div>
  );
}

export default App;
