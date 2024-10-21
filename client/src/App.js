import React from "react";
import "./index.css";

import MenuItem from "./components/MenuItems";
import QRCodeGenerator from "./components/QRCodeGenerator";

import chai from "./assets/kulhadchai.png";
import pav from "./assets/pawbhaji.jpeg";
import menu from "./assets/pawbhaji+chai.jpg";
import combo from "./assets/chaipav.jpeg";

function App() {
  const qrValue =
    "https://docs.google.com/forms/d/e/1FAIpQLSfwM4VVY8Zkf0tq12fmgOlV12PKs6fn9dInF-Ik1s5SAmzbOg/viewform?usp=send_form";

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">Icfai Asian Combo</h1>
      </header>

      <section className="menu-section">
        <MenuItem
          name="Menu"
          price={"Free"}
          discount={100}
          description="Menu for our stall."
          imageUrl={menu}
        />
        <MenuItem
          name="Chai"
          price={10}
          discount={""}
          description="Ingredients: Tea leaves, Elaichi, Milk, Sugar"
          imageUrl={chai}
        />
        <MenuItem
          name="Pav Bhaji"
          price={25}
          discount={""}
          description="Ingredients: Pav, masala bhaji"
          imageUrl={pav}
        />
        <MenuItem
          name="Combo (Pav-Bhaji + Chai)"
          price={30}
          discount={15}
          description="Full platter for special ones!"
          imageUrl={combo}
        />
      </section>

      <section
        className="qr-section"
        style={{ textAlign: "center" }}>
        <br></br>
        <br></br>
        <h2>Scan to Give Feedback</h2>
        <QRCodeGenerator value={qrValue} />
      </section>

      <footer>
        <p>Open Hours: 3PM - 6PM</p>
        <p>Contact: <b>+918346884110</b> | www..com</p>
      </footer>
    </div>
  );
}

export default App;
