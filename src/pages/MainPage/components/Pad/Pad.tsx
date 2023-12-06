import { useEffect, useRef, useCallback, useState } from "react";
import { useAppSelector } from "../../../../store/store";
import { useKeyPressEvent } from "react-use";
import {
  IPadState,
  createPlayerBySoundsEffectsConfigAndUrl,
} from "./createPlayerBySoundsEffectsConfigAndUrl";
import { IPad } from "../../../../types";

import s from "./Pad.module.css";

export function Pad({ sample, color, keyBoard, type }: IPad) {
  const playerRef = useRef<IPadState>();
  const [state, setState] = useState(false);

  const config = useAppSelector((store) => store.soundEffectsReducer);

  const handleClickDown = useCallback(() => {
    const player = playerRef.current?.player;
    if (!player || !player.loaded) return;
    try {
      player.start();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleClickUp = useCallback(() => {
    const player = playerRef.current?.player;
    if (!player || !player.loaded) return;
    try {
      player.stop();
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
    handleClickDown();
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
        onMouseDown={handleClickDown}
        onMouseUp={type === "trigger" ? undefined : handleClickUp}
      />
    );
  } else {
    return (
      <button
        className={s.root}
        style={{ backgroundColor: color }}
        onTouchStart={handleClickDown}
        onTouchEnd={type === "trigger" ? undefined : handleClickUp}
      />
    );
  }
}
