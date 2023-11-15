import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";

import s from "./styles.module.css";

export const SwitchSoundEffect = () => {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (soundEffect: ESoundEffect) => {
      dispatch(soundEffectsActions.clickEffect(soundEffect));
    },
    [dispatch]
  );

  return (
    <div className={s.root}>
      <button
        onClick={() => handleClick(ESoundEffect.PingPong)}
        className={
          config.soundEffects["Delay"].enabled ? s.buttonActiveDelay : s.button
        }
      >
        {"Delay"}
      </button>
      <button
        onClick={() => handleClick(ESoundEffect.Reverb)}
        className={
          config.soundEffects["Reverb"].enabled
            ? s.buttonActiveReverb
            : s.button
        }
      >
        {"Reverb"}
      </button>

      <button
        onClick={() => handleClick(ESoundEffect.CrusherMode)}
        className={
          config.soundEffects[ESoundEffect.CrusherMode].enabled
            ? s.buttonActiveCrusher
            : s.button
        }
      >
        {"Crusher"}
      </button>
    </div>
  );
};
