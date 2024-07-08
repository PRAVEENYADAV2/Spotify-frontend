import { useCallback, useMemo, useRef, useState } from "react";
import type { PanelGroupProps } from "react-resizable-panels";
import { removeUndefinedValuesFromObj } from "../../../utilities";
import type { PanelCustomProps } from "../PanelCustom";

export const useResizablePanelsCustom = () => {
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const onDragging = useCallback(
    (newIsDragging: boolean) => {
      isDraggingRef.current = newIsDragging;

      if (isDragging !== newIsDragging) {
        setIsDragging(newIsDragging);
      }
    },
    [isDragging]
  );

  const getPanelCustomProps = useCallback(
    ({
      id,
      minSpanPx,
      maxSpanPx,
      panelGroupDirection,
    }: {
      id: string;
      minSpanPx?: number;
      maxSpanPx?: number;
      panelGroupDirection: PanelGroupProps["direction"];
    }): Partial<PanelCustomProps> => {
      const minHeight =
        panelGroupDirection === "horizontal" ? undefined : minSpanPx;
      const maxHeight =
        panelGroupDirection === "horizontal" ? undefined : maxSpanPx;
      const minWidth =
        panelGroupDirection === "vertical" ? undefined : minSpanPx;
      const maxWidth =
        panelGroupDirection === "vertical" ? undefined : maxSpanPx;

      return {
        id,
        isDragging,
        minSpanPx,
        maxSpanPx,
        panelGroupDirection,
        style: removeUndefinedValuesFromObj({
          minHeight,
          maxHeight,
          minWidth,
          maxWidth,
        }),
      };
    },
    [isDragging]
  );

  return useMemo(
    () => ({
      getPanelCustomProps,
      panelResizeHandleCustomProps: {
        onDragging,
      },
    }),
    [getPanelCustomProps, onDragging]
  );
};
