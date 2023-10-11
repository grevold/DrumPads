import { useEffect, useRef, useCallback } from "react";
import { useAppSelector } from "../../store/store";
import { useKeyPressEvent } from "react-use";
import {
  IPadState,
  createPlayerBySoundsEffectsConfigAndUrl,
} from "./createPlayerBySoundsEffectsConfigAndUrl";

import s from "./Pad.module.css";

interface Props {
  url: string;
  color: string;
  keyBoard: string;
}

export function Pad({ url, color, keyBoard }: Props) {
  const playerRef = useRef<IPadState>();

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
    playerRef.current = createPlayerBySoundsEffectsConfigAndUrl(config, url);
    return () => {
      playerRef.current?.connectedEffects.forEach((connectedEffect) =>
        connectedEffect.dispose()
      );
    };
  }, [config, url]);

  useKeyPressEvent(`${keyBoard}`, handleClick);

  if (window.innerWidth > 1200) {
    return (
      <button
        className={s.root}
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
