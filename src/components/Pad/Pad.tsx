import { useEffect, useRef, useCallback } from "react";
import { useAppSelector } from "../../store/store";
import {
  IPadState,
  createPlayerBySoundsEffectsConfigAndUrl,
} from "./createPlayerBySoundsEffectsConfigAndUrl";

import s from "./Pad.module.css";

interface Props {
  url: string;
  color: string;
}

export function Pad({ url, color }: Props) {
  const playerRef = useRef<IPadState>();

  const config = useAppSelector((store) => store.soundEffectsReducer);

  const handleClick = useCallback(() => {
    const player = playerRef.current?.player;
    if (!player || !player.loaded) return;
    player.start();
  }, []);

  useEffect(() => {
    playerRef.current = createPlayerBySoundsEffectsConfigAndUrl(config, url);
    return () => {
      playerRef.current?.player.dispose();
      playerRef.current?.connectedEffects.forEach((connectedEffect) =>
        connectedEffect.dispose()
      );
    };
  }, [config, url]);

  return (
    <button
      className={s.root}
      style={{ backgroundColor: color }}
      onTouchStart={handleClick}
    />
  );
}
