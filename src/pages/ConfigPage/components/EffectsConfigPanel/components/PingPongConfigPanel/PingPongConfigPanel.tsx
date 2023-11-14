import { Slider } from "antd";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../store/store";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../../../store/soundEffectsConfigSlice";

import s from "./PingPongConfigPanel.module.css";

export const PingPongConfigPanel = () => {
  const params = useAppSelector(
    (store) =>
      store.soundEffectsReducer.soundEffects[ESoundEffect.PingPong].params
  );
  const dispatch = useAppDispatch();

  const delayTimeValue = useMemo(() => {
    const delayTime = params?.delayTime;
    if (typeof delayTime !== "string") return;
    return parseInt(delayTime, 10);
  }, [params?.delayTime]);

  const handleDelayTimeChange = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setDelayTimeForPingPongMode(value)),
    [dispatch]
  );
  const handleDelayFeedback = useCallback(
    (value: number) =>
      dispatch(soundEffectsActions.setFeedbackForPingPongMode(value)),
    [dispatch]
  );

  return (
    <div className={s.root}>
      <h3 className={s.header}>Delay</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <div className={s.regulator}>
          <Slider
            vertical
            value={delayTimeValue}
            min={1}
            max={30}
            onChange={handleDelayTimeChange}
          />
          <h3 className={s.option}>Time</h3>
        </div>
        <div className={s.regulator}>
          <Slider
            vertical
            step={0.1}
            value={params?.feedback}
            min={0}
            max={0.9}
            onChange={handleDelayFeedback}
          />
          <h3 className={s.option}>Fb</h3>
        </div>
      </div>
    </div>
  );
};
