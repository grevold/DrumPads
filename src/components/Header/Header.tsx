import { Burger } from "../../icons/Burger";
import { useAppSelector } from "../../store/store";
import { SwitchBanks } from "./components/SwitchBanks/SwitchBanks";

import s from "./Header.module.css";

interface IProps {
  onClick: () => void;
}

export function Header({ onClick }: IProps) {
  const nameOfPack = useAppSelector((store) => store.soundEffectsReducer.pack);

  return (
    <div className={s.root}>
      <h1 className={s.header}>{nameOfPack}</h1>
      <SwitchBanks />
      <button onClick={onClick}>
        <Burger />
      </button>
    </div>
  );
}
