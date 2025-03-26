import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  DotProps,
} from "recharts";

import { calculateZScore } from "./helpers";

import {
  BASE_COLORS,
  CHART_CONTAINER_DIMENSIONS,
  DATA,
  LINES,
} from "./constants";

import { CustomLegend } from "./components/CustomLegend";
import { CustomGradient } from "./components/CustomGradient";
import { CustomDot } from "./components/CustomDot";
import { TLine } from "./types";

import "./styles.css";

export default function App() {
  const uvZScores = calculateZScore(DATA.flatMap((item) => item.uv));
  const pvZScores = calculateZScore(DATA.flatMap((item) => item.pv));

  const { width, height, topMargin, padding } = CHART_CONTAINER_DIMENSIONS;

  const scores = (lineType: TLine) =>
    lineType === "uv" ? uvZScores : pvZScores;

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={DATA} margin={{ top: topMargin }} accessibilityLayer>
        {LINES.map((lineType) => (
          <defs>
            <CustomGradient
              key={lineType}
              id={`${lineType}Gradient`}
              data={scores(lineType)}
              baseColor={BASE_COLORS[lineType]}
            />
          </defs>
        ))}

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: padding, right: padding }} />
        <YAxis />
        <Tooltip />
        <Legend content={<CustomLegend />} />
        {LINES.map((lineType) => (
          <Line
            key={lineType}
            type="monotone"
            dataKey={lineType}
            stroke={`url(#${lineType}Gradient)`}
            dot={(props: DotProps) => (
              <CustomDot
                {...props}
                scores={scores(lineType)}
                lineType={lineType}
                dotType="standard"
              />
            )}
            activeDot={(props: DotProps) => (
              <CustomDot
                {...props}
                scores={scores(lineType)}
                lineType={lineType}
                dotType="active"
              />
            )}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
