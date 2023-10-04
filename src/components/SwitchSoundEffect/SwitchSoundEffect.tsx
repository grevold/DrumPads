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
  console.log(ESoundEffect);

  return (
    <ul className={s.root}>
      <li key={"Delay"}>
        <button
          onClick={() => handleClick(ESoundEffect.PingPong)}
          className={
            config.soundEffects["Delay"].enabled
              ? s.buttonActiveDelay
              : s.button
          }
        >
          {"Delay"}
        </button>
      </li>
      <li key={"Reverb"}>
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
      </li>
      <li key={"Crusher"}>
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
      </li>
      {/* {Object.values(ESoundEffect).map((soundEffect) => (
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
      ))} */}
    </ul>
  );
};
