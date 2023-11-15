import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import s from "./styles.module.css";

interface IProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<IProps>> = ({
  className,
  children,
}) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};
