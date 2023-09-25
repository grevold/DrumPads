import { useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";
import { Player } from "tone";

import s from "./Pad.module.css";

interface Props {
  sound: string;
  color: string;
  soundPack: string;
  bank: string;
  isPingPongMode: boolean;
  isPhaserMode: boolean;
  isCrusherMode: boolean;
}

const pingPong = new Tone.PingPongDelay("8n", 0.5).toDestination();
const phaser = new Tone.Phaser({
  frequency: 10,
  octaves: 2,
  baseFrequency: 1000,
}).toDestination();
const crusher = new Tone.BitCrusher(4).toDestination();

export function Pad({
  sound,
  color,
  isPingPongMode,
  isPhaserMode,
  isCrusherMode,
  soundPack,
  bank,
}: Props) {
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
    playerRef.current = new Player(
      `${process.env.PUBLIC_URL}/Samples/${soundPack}/${bank}/${sound}`
    ).toDestination();

    if (isPhaserMode) {
      playerRef.current.connect(phaser);
    }

    if (isPingPongMode) {
      playerRef.current.connect(pingPong);
    }

    if (isCrusherMode) {
      playerRef.current.connect(crusher);
    }
  }, [isPingPongMode, isPhaserMode, isCrusherMode]);

  return (
    <button
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={handleClick}
    ></button>
  );
}
