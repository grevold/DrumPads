import { samples } from "../../../../Texts";
import { useAppSelector } from "../../../../store/store";
import { Pad } from "../Pad/Pad";

import s from "./styles.module.css";

export function Pads() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.instrument][config.pack][config.bank];

  return (
    <div className={s.root}>
      <svg
        className={s.image}
        viewBox="0 0 3 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      {/* <img src={`${process.env.PUBLIC_URL}/klerk.png`} className={s.image} /> */}
      <div className={s.pads}>
        {samplesArray.map(({ color, sample, keyBoard }, index) => (
          <Pad key={index} sample={sample} color={color} keyBoard={keyBoard} />
        ))}
      </div>
    </div>
  );
}
