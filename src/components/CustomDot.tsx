import React from "react";
import { getDotColor } from "../helpers";
import { BASE_COLORS } from "../constants";
import { Dot, DotProps } from "recharts";
import { TLine } from "../types";

interface CustomDotProps extends DotProps {
  dotType: "standard" | "active";
  lineType: TLine;
  scores: number[];
  index?: number;
}

export const CustomDot = (props: CustomDotProps) => {
  const { dotType, lineType, scores, index = 0 } = props;

  const color = getDotColor(scores[index], BASE_COLORS[lineType]);
  
  const additionalProps =
    dotType === "active" ? { r: 8, fill: color } : { stroke: color };

  return <Dot {...props} {...additionalProps} />;
};
