import { useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";
import { Player } from "tone";
import {
  ESoundEffect,
  ISoundEffectsConfig,
} from "../../store/soundEffectsConfigSlice";
import { useAppSelector } from "../../store/store";

import s from "./Pad.module.css";

interface Props {
  url: string;
  color: string;
}

// const pingPong = new Tone.PingPongDelay("8n", 0.5).toDestination();
// const phaser = new Tone.Phaser({
//   frequency: 15,
//   octaves: 5,
//   baseFrequency: 1000,
// }).toDestination();
// const crusher = new Tone.BitCrusher(4).toDestination();

const createPlayerBySoundsEffectsConfigAndUrl = (
  { soundEffects, pack, bank }: ISoundEffectsConfig,
  url: string
): Tone.Player => {
  const player = new Player(
    `${process.env.PUBLIC_URL}/Samples/${pack}/${bank}/${url}`
  ).toDestination();

  if (soundEffects[ESoundEffect.PhaserMode].enabled) {
    player.connect(
      new Tone.Phaser(
        soundEffects[ESoundEffect.PhaserMode].params
      ).toDestination()
    );
  }

  if (soundEffects[ESoundEffect.PingPong].enabled) {
    player.connect(
      new Tone.PingPongDelay(
        soundEffects[ESoundEffect.PingPong].params?.delayTime,
        soundEffects[ESoundEffect.PingPong].params?.feedback
      ).toDestination()
    );
  }

  if (soundEffects[ESoundEffect.CrusherMode].enabled) {
    player.connect(
      new Tone.BitCrusher(
        soundEffects[ESoundEffect.CrusherMode].params?.bits
      ).toDestination()
    );
  }

  return player;
};

export function Pad({ url, color }: Props) {
  const playerRef = useRef<Tone.Player>();

  const config = useAppSelector((store) => store.soundEffectsReducer);
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
    playerRef.current = createPlayerBySoundsEffectsConfigAndUrl(config, url);
  }, [config, url]);

  return (
    <button
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={handleClick}
    />
  );
}
