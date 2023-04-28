interface ICenterOfRectangleLong {
  x: number;
  y: number;
}
export const findCenterOfRectangleAndLong = (
  _parts: ICenterOfRectangleLong[][]
) => {
  const x = Math.abs(_parts[0][0].x - _parts[0][2].x);
  const y = Math.abs(_parts[0][0].y - _parts[0][2].y);

  return { x, y };
};
