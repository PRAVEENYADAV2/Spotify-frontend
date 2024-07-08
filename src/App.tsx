import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
function App() {
  const [width, setWidth] = useState(300);
  const isOpen = width > 100;
  const handleMinimize = () => {
    setWidth(80);
  }
  const handleMaximize = () => {
    setWidth(300);
  }
  return (
    <div className="App h-[100vh] p-2 flex">
      <Navigation width={width} handleMinimize={handleMinimize} isOpen={isOpen} handleMaximize={handleMaximize}></Navigation>
    </div>
  );
}

export default App;
