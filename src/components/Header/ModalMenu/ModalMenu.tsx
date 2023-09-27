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
      <div className={s.container}>
        <h1 className={s.title}>Soundbank</h1>
        <Select
          value={config.pack}
          showSearch
          placeholder="Search to Select"
          onChange={handlePackSelect}
          options={Object.values(EPack).map((value) => ({
            value,
            label: value,
          }))}
        />
      </div>
    </div>
  );
}
