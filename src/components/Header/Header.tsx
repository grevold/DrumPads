import { useState } from "react";
import { Burger } from "../../icons/Burger";
import { useAppSelector } from "../../store/store";
import { SwitchBanks } from "./components/SwitchBanks/SwitchBanks";

import s from "./Header.module.css";

interface IProps {
  onClick: () => void;
}

export function Header({ onClick }: IProps) {
  const nameOfPack = useAppSelector((store) => store.soundEffectsReducer.pack);
  const [isOpened, setOpen] = useState(false);
  function handleClick() {
    setOpen((prevState) => !prevState);
    onClick();
  }

  return (
    <div className={s.root}>
      <h1 className={s.header}>{nameOfPack}</h1>
      <SwitchBanks />
      <button onClick={handleClick} className={s.button_burger}>
        <Burger isOpened={isOpened} />
      </button>
    </div>
  );
}
