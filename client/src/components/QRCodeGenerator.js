import React, { useState, useEffect } from 'react';
import { QRCode } from 'qrcode.react';

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
      <QRCode value={value} size={200} />
    </div>
  );
}

export default QRCodeGenerator;
