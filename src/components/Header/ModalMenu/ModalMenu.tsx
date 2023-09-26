import s from "./ModalMenu.module.css";

interface Props {
  isOpened: boolean;
}

export function ModalMenu({ isOpened }: Props) {
  return <div className={isOpened ? s.rootVisible : s.rootUnVisible}></div>;
}
