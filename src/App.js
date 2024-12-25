import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Reward from "./components/Reward";

function App() {
  return (
    <div className="max-h-screen flex max-w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <Navbar />
        <Reward />
      </div>
    </div>
  );
}

export default App;
