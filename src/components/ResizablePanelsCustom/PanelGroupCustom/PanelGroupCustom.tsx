import type { FC } from "react";
import React from "react";
import type { PanelGroupProps } from "react-resizable-panels";
import { PanelGroup } from "react-resizable-panels";

export const PanelGroupCustom: FC<PanelGroupProps> = ({
  ...props
}: PanelGroupProps) => <PanelGroup {...props} />;
