import { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Template.module.scss";

interface ITemplateProps {
  children: ReactNode;
  className?: string;
}

export const Template: FC<ITemplateProps> = ({ className, children }) => (
  <div className={clsx(styles.Template, className)}>{children}</div>
);
