import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const a = 10;

  return <>{a > 10 ? <div>hello</div> : <div>world</div>}</>;
}

export default App;
