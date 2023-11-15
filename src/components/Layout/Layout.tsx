import { FC, PropsWithChildren, ReactElement } from "react";
import { Container } from "../Container/Container";
import { use100vh } from "react-div-100vh";

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
  const height = use100vh();

  return (
    <div
      onClick={onClick}
      className={s.root}
      style={{ minHeight: height ? `${Math.floor(height)}px` : "100vh" }}
    >
      <header className={s.header}>
        <Container>{header}</Container>
      </header>
      <div className={s.children}>{children}</div>
      <footer className={s.footer}>
        <Container>{footer}</Container>
      </footer>
    </div>
  );
};
