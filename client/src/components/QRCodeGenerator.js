import React, { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
// import { toPng } from 'html-to-image';



function QRCodeGenerator({ value }) {
  const [error, setError] = useState(false);
  const qrRef = useRef();

  useEffect(() => {
    if (!value) {
      setError(true);
    }
  }, [value]);

  if (error) {
    return <p>Error generating QR code.</p>;
  }

  return (
    <div className="qr-code-container" ref={qrRef}>
      <QRCodeCanvas value={value} size={200} />
     </div>
  );
}

export default QRCodeGenerator;
