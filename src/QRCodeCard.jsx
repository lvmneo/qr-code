import React from 'react';
import './App.css';
import qrImg from './image/qrImg.png';


 const QRCodeCard = () => {
    return(
        <div className='qr-card'>
            
            <img className='qr-code' src={qrImg} alt="QR Code" width="270" height="270" /> {/* Используем img для отображения QR-кода */}
            
            <div className='qr-text'>
            <h2>Improve your front-end <br />
            skills by building projects</h2>
            <p>Scan the QR code to visit Frontend<br />
            Mentor and take your coding skills to <br />
            the next level</p>
            </div>
        </div>
    );

 };

export default QRCodeCard;