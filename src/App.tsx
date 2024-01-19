import React from 'react';
import './App.css';

function App(): JSX.Element {
  const handleColorClick = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
    e.stopPropagation();
    alert(`El color es: ${color} - Ecuador`); 
  };

  return (
    <div>
      <div className="color-container">
        <div className="color yellow" onClick={(e) => handleColorClick(e, 'amarillo')}>
          <div className="color blue" onClick={(e) => handleColorClick(e, 'azul')}>
            <div className="color red" onClick={(e) => handleColorClick(e, 'rojo')}>
           click
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 