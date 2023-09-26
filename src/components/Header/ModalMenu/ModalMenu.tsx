import { Select } from "antd";
import s from "./ModalMenu.module.css";
import {
  EPack,
  soundEffectsActions,
} from "../../../store/soundEffectsConfigSlice";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";

interface Props {
  isOpened: boolean;
}

export function ModalMenu({ isOpened }: Props) {
  const dispatch = useAppDispatch();
  const handlePackSelect = useCallback(
    (pack: EPack) => {
      dispatch(soundEffectsActions.selectPack(pack));
    },
    [dispatch]
  );
  const config = useAppSelector((store) => store.soundEffectsReducer);
  return (
    <div className={isOpened ? s.rootVisible : s.rootUnVisible}>
      <ul>
        <Select
          value={config.pack}
          onChange={handlePackSelect}
          options={Object.values(EPack).map((value) => ({
            value,
            label: value,
          }))}
        />
      </ul>
    </div>
  );
}
