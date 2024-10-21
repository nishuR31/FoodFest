import React, { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toPng } from 'html-to-image';

function downloadQRCode(ref) {
  toPng(ref.current).then((dataUrl) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qr-code.png';
    link.click();
  });
}

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
      <button onClick={() => downloadQRCode(qrRef)}>Download QR Code</button>
    </div>
  );
}

export default QRCodeGenerator;
