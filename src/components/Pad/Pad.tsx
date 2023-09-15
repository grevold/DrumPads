import s from "./Pad.module.css";
import { Howl } from "howler";

interface Props {
  sound: string;
  color: string;
}

export function Pad({ sound, color }: Props) {
  const sample = new Howl({
    src: [`${process.env.PUBLIC_URL}/Samples/${sound}`],
  });
  return (
    <div
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={() => {
        sample.play();
      }}
    ></div>
  );
}
