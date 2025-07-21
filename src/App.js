import React, { useState } from "react";
import "./App.css";

const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
  "#2ECC71", "#E74C3C", "#3498DB", "#1ABC9C", "#9B59B6",
  "#E67E22", "#34495E", "#16A085", "#27AE60", "#2980B9",
  "#D35400", "#C0392B", "#BDC3C7", "#7F8C8D", "#95A5A6",
  "#FFB6C1", "#FFA07A", "#20B2AA", "#00CED1", "#5F9EA0",
  "#9370DB", "#BA55D3", "#48D1CC", "#87CEFA", "#FF69B4"
];

function App() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    navigator.clipboard.writeText(color);
    alert(`Copied: ${color}`);
  };

  return (
    <div className="app">
      <h1>🎨 30 Color Picker</h1>
      <div className="color-grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
      <div className="preview" style={{ backgroundColor: selectedColor }}>
        <p>{selectedColor}</p>
      </div>
    </div>
  );
}

export default App;
