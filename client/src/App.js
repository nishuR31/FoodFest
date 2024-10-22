import React from "react";
import "./index.css";
import combo from "./assets/fullcombo.jpeg";
import sushi from "./assets/sushicrunch.jpeg";
import pav from "./assets/pavchai.jpeg";
import MenuItem from "./components/MenuItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">ICFAI ASIAN COMBO</h1>
      </header>

      <section className="menu-section" style={{ textAlign: "center" }}>
        <MenuItem
          name={"ICFAI Asia Combo"}
          description={
            "A Bite of Asia Served With Icfai Spirit. Here you will get sushi, pav bhaji, tea, golden cruncha all in one platter for special price Rs.60, Rs.10 OFF!!"
          }
          imageUrl={combo}
        />
        <MenuItem
          name={"Supper for ICFAIAN Menu"}
          description={
            "A bite of Asian ethnicity. Here you will get sushi, golden crunch and their combo at the most affordable prices!!"
          }
          imageUrl={sushi}
        />
        <MenuItem
          name={"The Authentic Taste of Maharashtra"}
          description={
            "A Bite of India ethnicity of Maharashtra. Here you will be served with pav bhaji, tea, and their combo at the most affordable prices!!"
          }
          imageUrl={pav}
        />
      </section>

      <footer className="App-footer">
        <div className="footer-info">
          <p>
            <strong>Contact Us:</strong>
          </p>
          <p>Email: <a href="mailto:dreamgf691@gmail.com">dreamgf691@gmail.com</a>|<a href="mailto:khanfardeen9987@gmail.com">khanfardeen9987@gmail.com</a></p>
          <p>Phone: <a href="tel:+1918346884110">+91 8346884110</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
