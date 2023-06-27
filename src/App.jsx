import { useState } from "react";
import "./App.css";
import data from "./data/phrases.json";
import { HandleFortuneCookie } from "./components/handleFortuneCookie";
import img from "../public/fondo1.jpg";
import img2 from "../public/fondo2.jpg";
import img3 from "../public/fondo3.jpg";
import img4 from "../public/fondo4.jpg";

function App() {
  const [cookieIndex, setCookieIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const colors = [img, img2, img3, img4];
  document.body.style = `background-image:url(${colors[bgIndex]})`;

  function handleClick(e) {
    e.preventDefault();
    setCookieIndex(Math.floor(Math.random() * 15));
    setBgIndex(Math.floor(Math.random() * 4));
  }

  return (
    <div>
      <h3>FORTUNE COOKIE</h3>
      <section className="section_main">
        <HandleFortuneCookie content={data[cookieIndex]} />
        <button onClick={(e) => handleClick(e)} className="btn_next">
          NEXT
        </button>
      </section>
    </div>
  );
}

export default App;
