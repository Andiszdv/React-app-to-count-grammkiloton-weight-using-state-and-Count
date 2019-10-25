import React, { useState } from "react";
import "./App.css";
import Count from "./components/Count.component";

function App() {
  const [gramCount, setCount] = useState(0);
  const { gram, kilo, ton, twix, car } = {
    gram: 1,
    kilo: 1000,
    ton: 1000000,
    twix: 64,
    car: 2000000
  };

  return (
    <div className="App">
      <header className="App-header">
        <Count
          gramCount={gramCount}
          setCount={setCount}
          countLabel="grammes"
          countIncrement={gram}
        />
        <Count
          gramCount={gramCount}
          setCount={setCount}
          countLabel="kilogramme"
          countIncrement={kilo}
        />
        <Count
          gramCount={gramCount}
          setCount={setCount}
          countLabel="tonnes"
          countIncrement={ton}
        />
        <Count
          gramCount={gramCount}
          setCount={setCount}
          countLabel="twix"
          countIncrement={twix}
        />
        <Count
          gramCount={gramCount}
          setCount={setCount}
          countLabel="car"
          countIncrement={car}
        />
      </header>
    </div>
  );
}

export default App;
