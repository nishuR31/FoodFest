import React from "react";
import "./index.css";
import combo from "./assets/fullcombo.jpeg"
import sushi from "./assets/sushicrunch.jpeg"
import pav from "./assets/pavchai.jpeg"
import MenuItem from "./components/MenuItems";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">ICFAI ASIAN COMBO</h1>
      </header>

      <section className="menu-section" style={{ textAlign: "center" }} >
        <MenuItem
          name={"ICFAI Asia Combo"}
          description={"A Bite of Asia Served With Icfai Spirit. Here you will get sushi, pav bhaji, tea,golden cruncha all in one plater for special price Rs.60, Rs.10 OFF!!"}
          imageUrl={combo}
        />
        <MenuItem
          name={"Supper for ICFAIAN Menu"}
          description={"A bite of Asian ethnicity. Here you will get sushi , golden crunch and the their combo in most affordable prices!!"}
          imageUrl={sushi}
        />
        <MenuItem
          name={"The Authentic Taste of Maharashtra"}
          description={"A Bite of India ethnicity of Maharashtra. Here you will be Served with pav bhaji, tea and their combo in most affordable prices!!"}
          imageUrl={pav}
        />
      </section>
      <footer>
        <p>Open Hours: 3PM - 6PM</p>
        <p>Contact: <b>+918346884110</b> | <a href="#">https://food-fest.vercel.app/</a></p>
      </footer>
    </div>
  );
}

export default App;
