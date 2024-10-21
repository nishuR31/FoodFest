import React from 'react';
import '../public/index.css';

import MenuItem from '../components/MenuItem.js';
import QRCodeGenerator from '../components/QRCodeGenerator.js';

function App() {
  const qrValue = "https://docs.google.com/forms/d/e/1FAIpQLSfwM4VVY8Zkf0tq12fmgOlV12PKs6fn9dInF-Ik1s5SAmzbOg/viewform?usp=send_form";

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="parallax">Icfai Asian Combo</h1>
      </header>

      <section className="menu-section">
        <MenuItem 
          name="Sushi Platter" 
          price={25} 
          discount={20} 
          description="Ingredients: Cucumber, Capsicum, Tomato, Carrot, Cabbage, Onion, Bread" 
        />
        <MenuItem 
          name="Crunch Platter" 
          price={20} 
          discount={33} 
          description="Ingredients: Potato, Spices" 
        />
        <MenuItem 
          name="Combo (Sushi + Crunch)" 
          price={50} 
          discount={20} 
          description="Full platter for special ones!" 
        />
      </section>

      {/* QR Code Section */}
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
