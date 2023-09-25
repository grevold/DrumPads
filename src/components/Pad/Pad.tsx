import { useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";
import { Player } from "tone";

import s from "./Pad.module.css";

interface Props {
  sound: string;
  color: string;
  soundPack: string;
  bank: string;
  isPingPongMode?: boolean;
}

const pingPong = new Tone.PingPongDelay("4n", 0.5).toDestination();

export function Pad({ sound, color, isPingPongMode, soundPack, bank }: Props) {
  const playerRef = useRef<Tone.Player>();
  const handleClick = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    try {
      player.start();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const player = new Player(
      `${process.env.PUBLIC_URL}/Samples/${soundPack}/${bank}/${sound}`
    ).toDestination();
    playerRef.current = player;
  }, [sound]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isPingPongMode) {
      player.connect(pingPong);
    } else {
      playerRef.current = new Player(
        `${process.env.PUBLIC_URL}/Samples/${soundPack}/${bank}/${sound}`
      ).toDestination();
    }
  }, [isPingPongMode]);

  return (
    <button
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={handleClick}
    ></button>
  );
}
