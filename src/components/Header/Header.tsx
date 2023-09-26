import { useState } from "react";
import { Burger } from "../../icons/Burger";
import { useAppSelector } from "../../store/store";

import s from "./Header.module.css";
import { ModalMenu } from "./ModalMenu/ModalMenu";

export function Header() {
  const nameOfPack = useAppSelector((store) => store.soundEffectsReducer.pack);
  const [isOpenedMenu, setState] = useState(false);
  return (
    <div className={s.root}>
      <h1 className={s.header}>{nameOfPack}</h1>
      <Burger
        isBurgerOpen={isOpenedMenu}
        className={s.burger}
        onClick={() => {
          setState((prevState) => !prevState);
        }}
      />
      <ModalMenu isOpened={isOpenedMenu} />
    </div>
  );
}
