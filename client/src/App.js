import React from 'react';
import './index.css';

import MenuItem from './components/MenuItems'; 
import QRCodeGenerator from './components/QRCodeGenerator';

function App() {
  const qrValue = "https://docs.google.com/forms/d/e/1FAIpQLSfwM4VVY8Zkf0tq12fmgOlV12PKs6fn9dInF-Ik1s5SAmzbOg/viewform?usp=send_form";

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">Icfai Asian Combo</h1>
      </header>

      <section className="menu-section">
        <MenuItem 
          name="Menu" 
          price={"free"} 
          discount={100} 
          description="Menu" 
          imageUrl="A:\app\FoodFest\client\src\assets\menu.jpeg" // Replace with actual image URL
        />
        <MenuItem 
          name="Sushi Platter" 
          price={25} 
          discount={20} 
          description="Ingredients: Cucumber, Capsicum, Tomato, Carrot, Cabbage, Onion, Bread" 
          imageUrl="A:\app\FoodFest\client\src\assets\vegsushi.jpg" // Replace with actual image URL
        />
        <MenuItem 
          name="Crunch Platter" 
          price={20} 
          discount={33} 
          description="Ingredients: Potato, Spices" 
          imageUrl="A:\app\FoodFest\client\src\assets\goldencrunch.png" // Replace with actual image URL
        />
        <MenuItem 
          name="Combo (Sushi + Crunch)" 
          price={50} 
          discount={20} 
          description="Full platter for special ones!" 
          imageUrl="https://example.com/combo.jpg" // Replace with actual image URL
        />
      </section>

      <section className="qr-section">
        <h2>Scan to Give Feedback</h2>
        <QRCodeGenerator value={qrValue} />
      </section>

      <footer>
        <p>Open Hours: 3PM - 6PM</p>
        <p>Contact: +918346884110 | www..com</p>
      </footer>
    </div>
  );
}

export default App;
