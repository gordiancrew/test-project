import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MainPage from "./components/main/header";
import "./components/styles/global.css";
import Header from "./components/main/header";
import Picture from "./components/main/picture";
import Content from "./components/main/content";

function App() {
  return (
    <div>
      <Header />
      <Picture />
      <Content />
      <h1>Преврати свое устройство в игровое поле!!!</h1>
      <h1 className="test">We are start!&</h1>
      <h1>We are start!</h1>
      <h1>We are start!</h1>
    </div>
  );
}

export default App;
