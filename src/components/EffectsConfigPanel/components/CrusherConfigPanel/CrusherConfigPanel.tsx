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
    <div className={s.root}>
      <h3 className={s.header}>Crusher</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <div className={s.regulator}>
          <Slider
            vertical
            value={params?.bits}
            min={1}
            max={10}
            onChange={handleCrusherChange}
          />
          <h3 className={s.option}>Bits</h3>
        </div>
      </div>
    </div>
  );
};
