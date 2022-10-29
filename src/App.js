import Color from 'color';
import { useState } from 'react';
import './App.css';
import ViewPort from './ViewPort';

function App() {
  const viewport = ViewPort();
  const [Hue, setHue] = useState(0);
  const [Saturation, SetSaturation] = useState(0);
  const [Lightness, SetLightness] = useState(0);

  const color = Color("hsl(" + Hue + "," + Saturation + "%," + Lightness + "%)");

  return (
    <div className="App"
      style={{ background: color.hex().toString() }}
      onMouseMove={(e) => {
        setHue(360 * Math.sqrt(e.clientX ** 2 + e.clientY ** 2) / Math.sqrt(viewport.width ** 2 + viewport.height ** 2));
        SetSaturation(100 * e.clientX / viewport.width);
        SetLightness(100 * e.clientY / viewport.height);
      }}
      onClick={(e) => navigator.clipboard.writeText("--color-hex: " + color.hex().toString() + "\n--color-hsl: " + color.hsl().toString() + "\n--color-rgb: " + color.rgb().toString() + "\n--color-hwb: " + color.hwb().toString())}
    >
      <div className='conteiner__title'>
        <div className='title' style={{ color: color.negate().toString() }}>Rainbow.io</div>
        <div className='subtitle' style={{ color: color.negate().toString() }}>Click to copy variables css.</div>
      </div>
    </div>
  );
}

export default App;
