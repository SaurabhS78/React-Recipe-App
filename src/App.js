import React from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

const APP_ID = "bb0f4f21";
const APP_KEY = "49a492348964d4dec0392ee5b89a582f";

function App() {
  //const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const url = "";

  async function request() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  request();

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
