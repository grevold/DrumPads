import { samples } from "../../../../Texts";
import { useAppSelector } from "../../../../store/store";
import { Pad } from "../Pad/Pad";

import s from "./styles.module.css";

export function Pads() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.instrument][config.pack][config.bank];

  return (
    <div className={s.root}>
      {samplesArray.map(({ color, sample, keyBoard }, index) => (
        <Pad key={index} sample={sample} color={color} keyBoard={keyBoard} />
      ))}
    </div>
  );
}
