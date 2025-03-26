import React from "react";
import { BASE_COLORS, LEGEND_SIZE } from "../constants";
import { CustomGradientProps } from "../types";

import "../styles.css";

export const CustomLegend = ({ payload }: CustomGradientProps) => (
  <div className="legend-container">
    {payload &&
      payload.map(({ dataKey }, index) => (
        <div key={index} className="legend-item">
          <svg width={LEGEND_SIZE} height={LEGEND_SIZE}>
            <rect
              width={LEGEND_SIZE}
              height={LEGEND_SIZE}
              fill={BASE_COLORS[dataKey]}
            />
          </svg>
          <span>{dataKey}</span>
        </div>
      ))}
  </div>
);
