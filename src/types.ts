import { LegendProps } from "recharts";

export type TLine = "uv" | "pv";

type CustomPayload = Omit<LegendProps["payload"], "dataKey"> & {
  dataKey: TLine;
};

export type CustomGradientProps = Omit<LegendProps, "payload"> & {
  payload?: CustomPayload[];
};
