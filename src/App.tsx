import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import DetailsSong from "./components/DetailsSong";
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
    <div className="App h-[100vh] p-2 flex gap-2">
      <Navigation width={width} handleMinimize={handleMinimize} isOpen={isOpen} handleMaximize={handleMaximize}></Navigation>
      <div className="bg-[#121212] rounded-lg"  style={{ height: "calc(100vh - 8px)", width: `calc(100vw - ${width + 350 + 32}px)` }}>

      </div>
      <DetailsSong></DetailsSong>
    </div>
  );
}

export default App;
