import s from "./CrusherConfigPanel.module.css";
import { Slider } from "antd";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useCallback } from "react";

export const CrusherConfigPanel = () => {
  const params = useAppSelector(
    (store) =>
      store.soundEffectsReducer.soundEffects[ESoundEffect.CrusherMode].params
  );
  const dispatch = useAppDispatch();

  const handleCrusherChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setBitForCrusherMode(value)),
    [dispatch]
  );
  return (
    <div>
      <h3>Crusher</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <div>
          <h3>Bits</h3>
          <Slider
            vertical
            value={params?.bits}
            min={1}
            max={10}
            onChange={handleCrusherChange}
          />
        </div>
      </div>
    </div>
  );
};
