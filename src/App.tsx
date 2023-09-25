import { Pad } from "./components/Pad/Pad";
import { texts } from "./Texts";
import { useState } from "react";

import s from "./index.module.css";

function App() {
  const arrayOfPads = texts.Main.pads;
  const [state, setState] = useState(false);
  const [isPingPongMode, setPingPongMode] = useState(false);

  if (!state) {
    return (
      <button
        onClick={() => {
          setState(true);
        }}
      >
        Начать
      </button>
    );
  }

  return (
    <div className={s.root}>
      <h1 className={s.header}>Drum Pads</h1>
      <div className={s.playGround}>
        {arrayOfPads.Classic_Hip_Hop.A.map((pad) => (
          <Pad
            key={pad.sample}
            soundPack={"Classic_Hip_Hop"}
            bank={"A"}
            sound={pad.sample}
            color={pad.color}
            isPingPongMode={isPingPongMode}
          />
        ))}
      </div>
      <div>
        <input
          type="checkbox"
          checked={isPingPongMode}
          onChange={() => setPingPongMode((value) => !value)}
        />
        <label>Ping-pong mode</label>
      </div>
    </div>
  );
}

export default App;
