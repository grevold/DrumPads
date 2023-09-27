import { Slider } from "antd";
import {
  ESoundEffect,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useCallback, useMemo } from "react";
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
    <div>
      <h3>Delay</h3>
      <div style={{ height: "150px" }} className={s.regulators}>
        <Slider
          vertical
          value={delayTimeValue}
          min={1}
          max={30}
          onChange={handleDelayTimeChange}
        />
        <Slider
          vertical
          step={0.1}
          value={params?.feedback}
          min={0}
          max={1}
          onChange={handleDelayFeedback}
        />
      </div>
    </div>
  );
};
