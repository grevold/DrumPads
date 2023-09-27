import { Pad } from "./components/Pad/Pad";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SwitchSoundEffect } from "./components/SwitchSoundEffect/SwitchSoundEffect";
import { useAppSelector } from "./store/store";
import { samples } from "./Texts";

import s from "./index.module.css";

function App() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.pack][config.bank];

  const [state, setState] = useState(false);

  if (!state) {
    return (
      <div className={s.root}>
        <button
          className={s.start}
          onClick={() => {
            setState(true);
          }}
        >
          Начать
        </button>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <Header />
      <div className={s.playGround}>
        {samplesArray.map(({ color, sample }, index) => (
          <Pad key={index} url={sample} color={color} />
        ))}
      </div>
      <SwitchSoundEffect />
    </div>
  );
}

export default App;
