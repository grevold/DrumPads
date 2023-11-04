import { samples } from "../../Texts";
import { useAppSelector } from "../../store/store";
import { Pad } from "../Pad/Pad";
import { SwitchSoundEffect } from "../SwitchSoundEffect/SwitchSoundEffect";

import s from "./Main.module.css";

export function Main() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.instrument][config.pack][config.bank];

  return (
    <div className={s.root}>
      <div className={s.playGround}>
        {samplesArray.map(({ color, sample, keyBoard }, index) => (
          <Pad key={index} sample={sample} color={color} keyBoard={keyBoard} />
        ))}
      </div>
      <SwitchSoundEffect />
    </div>
  );
}
