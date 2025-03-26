import React from "react";

interface CustomGradientProps {
  id: string;
  data: number[];
  baseColor: string;
  accentColor?: string;
}

export const CustomGradient = ({
  id,
  data,
  baseColor,
  accentColor = "red",
}: CustomGradientProps) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    {data.map((point, index) => {
      const offset = (index / (data.length - 1)) * 100;
      const color = Math.abs(point) > 1 ? accentColor : baseColor;
      return <stop key={index} offset={`${offset}%`} stopColor={color} />;
    })}
  </linearGradient>
);
