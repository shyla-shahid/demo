import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Adv from "./components/Adv";

function App() {
  return (
    <div>
      <Navbar />
      <Adv />
      <hr />
      <div className="mt-3">
        <Main />
      </div>
    </div>
  );
}

export default App;
