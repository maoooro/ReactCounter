import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <>
    <p>Compteur : {count}</p>

    <button onClick={increment}>+1</button>
  </>
}

export default App

// ep 4 : 2m20