import { Pad } from "./components/Pad/Pad";
import { texts } from "./Texts";
import { useState } from "react";
import s from "./index.module.css";
import { Header } from "./components/Header/Header";

function App() {
  console.log("рендер");
  const arrayOfPads = texts.Main.pads;
  const [state, setState] = useState(false);
  const [isPingPongMode, setPingPongMode] = useState(false);
  const [isPhaserMode, setPhaserMode] = useState(false);
  const [isCrusherMode, setCrusherMode] = useState(false);

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
        {arrayOfPads.Classic_Hip_Hop.A.map((pad) => (
          <Pad
            key={pad.sample}
            soundPack={"Classic_Hip_Hop"}
            bank={"A"}
            sound={pad.sample}
            color={pad.color}
            isPingPongMode={isPingPongMode}
            isPhaserMode={isPhaserMode}
            isCrusherMode={isCrusherMode}
          />
        ))}
      </div>
      <ul className={s.fx}>
        <li>
          <button
            className={isPingPongMode ? s.fxButton_on : s.fxButton_off}
            onClick={() => setPingPongMode((value) => !value)}
          >
            Delay
          </button>
        </li>
        <li>
          <button
            className={isPhaserMode ? s.fxButton_on : s.fxButton_off}
            onClick={() => setPhaserMode((value) => !value)}
          >
            Phaser
          </button>
        </li>
        <li>
          <button
            className={isCrusherMode ? s.fxButton_on : s.fxButton_off}
            onClick={() => setCrusherMode((value) => !value)}
          >
            Crusher
          </button>
        </li>
      </ul>
      <span className={s.title}>Drum Pads</span>
    </div>
  );
}

export default App;
