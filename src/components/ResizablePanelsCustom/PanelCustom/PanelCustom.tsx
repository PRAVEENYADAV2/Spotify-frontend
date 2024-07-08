import { useRef, useCallback, useEffect } from "react";
import { type FC } from "react";
import React from "react";
import type { PanelGroupProps, PanelProps } from "react-resizable-panels";
import { Panel } from "react-resizable-panels";
import classNames from "classnames";
import styles from "./PanelCustom.module.scss";
import { InferRef } from "../../../types";

export interface PanelCustomProps extends PanelProps {
  classNameInner?: string;
  minSpanPx?: number;
  maxSpanPx?: number;
  isDragging?: boolean;
  panelGroupDirection?: PanelGroupProps["direction"];
}

export const PanelCustom: FC<PanelCustomProps> = ({
  children,
  className,
  classNameInner,
  onResize,
  minSpanPx,
  maxSpanPx,
  isDragging,
  panelGroupDirection,
  ...props
}) => {
  const panelApiRef = useRef<InferRef<typeof Panel>>(null);
  const panelInnerRef = useRef<HTMLDivElement>(null);
  const hasDraggedRef = useRef(false);
  const currentPanelSizeRef = useRef<number>();
  const sizePercentageToPxScaleFactorRef = useRef<number>();
  const minPermittedSizeRef = useRef<number>();
  const maxPermittedSizeRef = useRef<number>();

  const reset = useCallback(() => {
    currentPanelSizeRef.current = undefined;
    minPermittedSizeRef.current = undefined;
    maxPermittedSizeRef.current = undefined;
    sizePercentageToPxScaleFactorRef.current = undefined;
  }, []);

  useEffect(() => {
    if (isDragging) {
      hasDraggedRef.current = true;
    } else if (hasDraggedRef?.current && currentPanelSizeRef?.current) {
      const minPermittedSize = minPermittedSizeRef.current;
      const maxPermittedSize = maxPermittedSizeRef.current;

      const hasExceededMinSize =
        minPermittedSize && currentPanelSizeRef?.current < minPermittedSize;
      const hasExceededMaxSize =
        maxPermittedSize && currentPanelSizeRef?.current > maxPermittedSize;

      if (minPermittedSizeRef.current !== undefined && hasExceededMinSize) {
        panelApiRef?.current?.resize(minPermittedSize);
      } else if (
        maxPermittedSizeRef.current !== undefined &&
        hasExceededMaxSize
      ) {
        panelApiRef?.current?.resize(maxPermittedSize);
      }

      reset();
    }
  }, [isDragging, panelApiRef, reset]);

  const handleResize: PanelProps["onResize"] = (size, prevSize) => {
    const elementSpanPx =
      panelInnerRef?.current?.[
        panelGroupDirection === "horizontal" ? "clientWidth" : "clientHeight"
      ] || 0;

    const sizePercentagePxRatio = elementSpanPx / size;

    if (!sizePercentageToPxScaleFactorRef.current) {
      sizePercentageToPxScaleFactorRef.current = sizePercentagePxRatio;
      minPermittedSizeRef.current =
        (minSpanPx || 0) / sizePercentageToPxScaleFactorRef.current;
      maxPermittedSizeRef.current =
        (maxSpanPx || Infinity) / sizePercentageToPxScaleFactorRef.current;
    }

    currentPanelSizeRef.current = size;

    if (onResize) {
      onResize(size, prevSize);
    }
  };

  return (
    <Panel
      {...props}
      className={classNames(styles.panel, className)}
      onResize={handleResize}
      ref={panelApiRef}
    >
      <div
        className={classNames(styles.panelInner, classNameInner)}
        ref={panelInnerRef}
      >
        {children}
      </div>
    </Panel>
  );
};
