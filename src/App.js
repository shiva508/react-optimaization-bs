import React, { useState, useCallback } from "react";
import "./App.css";
import DemoListContainer from "./components/Demo/DemoListContainer";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
function App() {
  const [showParagrap, setShowParagrap] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagrap((prevShowParagrap) => !prevShowParagrap);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagrap} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Pragraph</Button>
      <DemoListContainer />
    </div>
  );
}

export default App;
