import { Burger } from "../../icons/Burger";
import { useAppSelector } from "../../store/store";

import s from "./Header.module.css";

import { SwitchBanks } from "./components/SwitchBanks/SwitchBanks";
import { useLocation } from "react-router";
import { RoutePath } from "../../types";
import { Link } from "react-router-dom";

export function Header() {
  const nameOfPack = useAppSelector((store) => store.soundEffectsReducer.pack);
  const location = useLocation();
  return (
    <div className={s.root}>
      <h1 className={s.header}>{nameOfPack}</h1>
      <SwitchBanks />
      <Link
        to={
          location.pathname === RoutePath.Main
            ? RoutePath.Config
            : RoutePath.Main
        }
      >
        <Burger />
      </Link>
    </div>
  );
}
