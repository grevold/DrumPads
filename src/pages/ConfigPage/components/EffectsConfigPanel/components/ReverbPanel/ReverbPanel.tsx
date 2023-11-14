import { Slider } from "antd";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../store/store";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../../../store/soundEffectsConfigSlice";

import s from "./ReverbPanel.module.css";

export const ReverbPanel = () => {
  const params = useAppSelector(
    (store) =>
      store.soundEffectsReducer.soundEffects[ESoundEffect.Reverb].params
  );
  const dispatch = useAppDispatch();

  const handleRoomSizeChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setRoomSizeForReverb(value)),
    [dispatch]
  );

  return (
    <div className={s.root}>
      <h3 className={s.header}>Reverb</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <div className={s.regulator}>
          <Slider
            vertical
            value={params?.roomSize}
            step={1}
            min={1}
            max={20}
            onChange={handleRoomSizeChange}
          />
          <h3 className={s.option}>Size</h3>
        </div>
      </div>
    </div>
  );
};
