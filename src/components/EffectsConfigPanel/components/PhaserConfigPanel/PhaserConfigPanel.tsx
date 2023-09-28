import { Slider } from "antd";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useCallback, useMemo } from "react";
import s from "./PhaserConfigPanel.module.css";

export const PhaserConfigPanel = () => {
  const params = useAppSelector(
    (store) =>
      store.soundEffectsReducer.soundEffects[ESoundEffect.PhaserMode].params
  );
  const dispatch = useAppDispatch();

  const handleFrequencyChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setFrequencyForPhaserMode(value)),
    [dispatch]
  );
  const handleOctavesChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setOctavesForPhaserMode(value)),
    [dispatch]
  );
  const handleBaseFrequencyChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setBaseFrequencyForPhaserMode(value)),
    [dispatch]
  );

  return (
    <div>
      <h3>Phaser</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <div>
          <h3>Frq</h3>
          <Slider
            vertical
            value={params?.frequency}
            min={1}
            max={20}
            onChange={handleFrequencyChange}
          />
        </div>
        <div>
          <h3>Oct</h3>
          <Slider
            vertical
            value={params?.octaves}
            min={1}
            max={10}
            onChange={handleOctavesChange}
          />
        </div>
        <div>
          <h3>Base</h3>
          <Slider
            vertical
            value={params?.baseFrequency}
            min={1}
            max={20}
            onChange={handleBaseFrequencyChange}
          />
        </div>
      </div>
    </div>
  );
};
