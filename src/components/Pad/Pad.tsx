import { useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";
import { Sampler } from "tone";

import s from "./Pad.module.css";

interface Props {
  sound: string;
  color: string;
}

export function Pad({ sound, color }: Props) {
  // const sample = new Howl({
  //   src: [`${process.env.PUBLIC_URL}/Samples/${sound}`],
  // });
  const playerRef = useRef<Tone.Sampler>();

  const handleClick = useCallback(() => {
    const player = playerRef.current;
    if (player?.loaded) {
      player.triggerAttack("C4");
    } else {
      console.log("Звук ещё не загрузился!");
    }
  }, []);

  useEffect(() => {
    const player = new Sampler({
      urls: {
        C4: "C4.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
    // const pingPong = new Tone.PingPongDelay("1n", 0.3).toDestination();
    // const pitch = new Tone.PitchShift(10).toDestination();
    // player.connect(pingPong);
    // player.connect(pitch);
    playerRef.current = player;
  }, [sound]);

  return (
    <button
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={handleClick}
    ></button>
  );
}
