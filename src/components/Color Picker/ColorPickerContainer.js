import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Header from "../../Header";

function ColorPickerContainer() {
  const [color, setColor] = useState("#595959");
  return (
    <div>
      <Header
        title="Color Picker"
        link="https://casesandberg.github.io/react-color/"
      />
      <div style={{ width: 100, height: 100, backgroundColor: color }}>
        <p>You picked {color}</p>
      </div>
      <p>Sketch Picker</p>
      <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
    </div>
  );
}

export default ColorPickerContainer;
