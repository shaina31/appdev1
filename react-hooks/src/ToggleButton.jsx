import { useState } from 'react';

const ToggleButton = () => {
  const [isOn, isOff] = useState(false);

  return (
    <div>
      <h2>{isOn ? 'The button is ON' : 'The button is OFF'}</h2>
      <button onClick={() => isOff(!isOn)}>Toggle</button>
    </div>
  );
}

export default ToggleButton;