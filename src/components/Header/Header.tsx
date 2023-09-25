import { Burger } from "../../icons/Burger";
import s from "./Header.module.css";

export function Header() {
  return (
    <div className={s.root}>
      <h1 className={s.header}>Name of SoundPack</h1>
      <Burger />
    </div>
  );
}
