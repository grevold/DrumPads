import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../store/soundEffectsConfigSlice";

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
    <ul className={s.root}>
      {Object.values(ESoundEffect).map((soundEffect) => (
        <li key={soundEffect}>
          <button
            onClick={() => handleClick(soundEffect)}
            className={
              config.soundEffects[soundEffect].enabled
                ? s.buttonActive
                : s.button
            }
          >
            {soundEffect}
          </button>
        </li>
      ))}
    </ul>
  );
};
