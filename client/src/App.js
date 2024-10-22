import React from "react";
import "./App.css";
import combo from "./assets/fullcombo.jpeg";
import sushi from "./assets/sushicrunch.jpeg";
import pav from "./assets/pavchai.jpeg";
import MenuItem from "./components/MenuItems";

const menuItems = [
  {
    name: "ICFAI Asia Combo",
    description:
      "A Bite of Asia Served With ICFAI Spirit. Here you will get sushi, pav bhaji, tea, golden cruncha all in one platter for special price Rs.60, Rs.10 OFF!!",
    imageUrl: combo,
  },
  {
    name: "Supper for ICFAIAN",
    description:
      "A bite of Asian ethnicity. Here you will get sushi, golden crunch and their combo at the most affordable prices!!",
    imageUrl: sushi,
  },
  {
    name: "The Authentic Taste of Maharashtra",
    description:
      "A Bite of India ethnicity of Maharashtra. Here you will be served with pav bhaji, tea, and their combo at the most affordable prices!!",
    imageUrl: pav,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">ICFAI ASIAN COMBO</h1>
        <br />
      </header>
      <div>
        <h5 className="parallaxp">A bite of Asia, served with ICFAI spirit</h5>
      </div>

      <section className="menu-section" style={{ textAlign: "center" }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </section>

      <footer className="App-footer">
        <div className="footer-info">
          <p>
            <strong>Contact Us:</strong>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:nishanrajak01@gmail.com">nishanrajak01@gmail.com</a>
            |
            <a href="mailto:khanfardeen9987@gmail.com"> khanfardeen9987@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+918346884110">+91 8346884110</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
