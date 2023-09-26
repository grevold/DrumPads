import { Burger } from "../../icons/Burger";
import { useAppSelector } from "../../store/store";

import s from "./Header.module.css";

export function Header() {
  const nameOfPack = useAppSelector((store) => store.soundEffectsReducer.pack);
  return (
    <div className={s.root}>
      <h1 className={s.header}>{nameOfPack}</h1>
      <Burger />
    </div>
  );
}
