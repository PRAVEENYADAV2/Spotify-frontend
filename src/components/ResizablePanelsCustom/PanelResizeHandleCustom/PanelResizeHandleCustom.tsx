import type { FC } from "react";
import React from "react";
import type { PanelResizeHandleProps } from "react-resizable-panels";
import { PanelResizeHandle } from "react-resizable-panels";
import classNames from "classnames";
import styles from "./PanelResizeHandleCustom.module.scss";

export interface PanelResizeHandleCustomProps extends PanelResizeHandleProps {
  orientation: "vertical" | "horizontal";
}

export const PanelResizeHandleCustom: FC<PanelResizeHandleCustomProps> = ({
  className,
  orientation,
  ...props
}) => (
  <PanelResizeHandle
    {...props}
    className={classNames(className, styles.resizeHandle, {
      [styles.isVertical]: orientation === "vertical",
    })}
  />
);
