import { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./UILogo.module.scss";

interface IUILogoProps {
  children: ReactNode;
  className?: string;
}

export const UILogo: FC<IUILogoProps> = ({ className, children }) => (
  <div className={clsx(styles.UILogo, className)}>LOGINOVA.TATTOO </div>
);
