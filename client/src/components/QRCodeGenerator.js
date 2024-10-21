import React, { useState, useEffect } from 'react';
// import { QRCode } from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react'; // Use this if you want Canvas rendering
// Or
// import { QRCodeSVG } from 'qrcode.react'; // Use this if you prefer SVG rendering


function QRCodeGenerator({ value }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!value) {
      setError(true);
    }
  }, [value]);

  if (error) {
    return <p>Error generating QR code.</p>;
  }

  return (
    <div className="qr-code-container">
      <QRCodeCanvas value={value} size={200} />
    </div>
  );
}

export default QRCodeGenerator;
