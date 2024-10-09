import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Backimg from "../src/assest/backimg.png";

function App() {
  useEffect(() => {
    document.getElementById("body").style.backgroundImage = `url('${Backimg}')`;
  });
  return <div id="body" style={{}}></div>;
}

export default App;
