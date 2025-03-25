export const calculateZScore = (data: number[]) => {
  const mean = data.reduce((acc, value) => acc + value, 0) / data.length;

  const standardDeviation = Math.pow(
    data.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) /
      data.length,
    0.5
  );

  const zScoreArray = data.map((item) => (item - mean) / standardDeviation);

  return zScoreArray;
};

export const getDotColor = (val: number, baseColor: string) =>
  Math.abs(val) > 1 ? "red" : baseColor;
