import { FC, PropsWithChildren, ReactElement } from "react";

import s from "./styles.module.css";

interface IProps {
  header: ReactElement;
  footer: ReactElement;
  onClick?: () => void;
}

export const Layout: FC<PropsWithChildren<IProps>> = ({
  header,
  children,
  footer,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={s.root}>
      <header className={s.header}>{header}</header>
      <div className={s.children}>
        <div className={s.wrap}>{children}</div>
      </div>
      <footer className={s.footer}>{footer}</footer>
    </div>
  );
};
