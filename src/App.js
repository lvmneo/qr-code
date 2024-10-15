import React from 'react';
import QRCodeCard from './QRCodeCard'; 
import './App.css';

function App() {
 
  return (
    <div
    className="App"
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#D5E1EF',
    }}
>
        <QRCodeCard />
    </div>
);
}

export default App;
