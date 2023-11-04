import { useEffect, useRef, useCallback, useState } from "react";
import { useAppSelector } from "../../store/store";
import { useKeyPressEvent } from "react-use";
import {
  IPadState,
  createPlayerBySoundsEffectsConfigAndUrl,
} from "./createPlayerBySoundsEffectsConfigAndUrl";
import { IPad } from "../../types";

import s from "./Pad.module.css";

export function Pad({ sample, color, keyBoard }: IPad) {
  const playerRef = useRef<IPadState>();
  const [state, setState] = useState(false);

  const config = useAppSelector((store) => store.soundEffectsReducer);

  const handleClick = useCallback(() => {
    const player = playerRef.current?.player;
    if (!player || !player.loaded) return;
    try {
      player.start();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const state = playerRef.current;
    if (state) {
      const { player, connectedEffects } = state;
      player.onstop = () => {
        player.dispose();
        connectedEffects.forEach((connectedEffect) =>
          connectedEffect.dispose()
        );
      };
    }
    playerRef.current = createPlayerBySoundsEffectsConfigAndUrl(config, sample);
    return () => {
      playerRef.current?.connectedEffects.forEach((connectedEffect) =>
        connectedEffect.dispose()
      );
    };
  }, [config, sample]);
  function keyPress() {
    handleClick();
    setState((prevState) => !prevState);
    setTimeout(() => {
      setState((prevState) => !prevState);
    }, 300);
  }

  useKeyPressEvent(`${keyBoard.toLowerCase()}`, keyPress);

  if (window.innerWidth > 1200) {
    return (
      <button
        className={state ? s.root_bright : s.root}
        id={keyBoard}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
    );
  } else {
    return (
      <button
        className={s.root}
        style={{ backgroundColor: color }}
        onTouchStart={handleClick}
      />
    );
  }
}
