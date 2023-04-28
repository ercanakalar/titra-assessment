interface ICenterOfRectanglePosition {
  lat: number;
  lng: number;
}

interface ICenterOfRectangleLong {
  x: number;
  y: number;
}
export const findCenterOfRectangleAndLong = (
  _latlngs: ICenterOfRectanglePosition[][],
  _parts: ICenterOfRectangleLong[][]
) => {
  const centerOfRectangleLat = (_latlngs[0][0].lat + _latlngs[0][2].lat) / 2;
  const centerOfRectangleLng = (_latlngs[0][1].lng + _latlngs[0][3].lng) / 2;
  const x = Math.abs(_parts[0][0].x - _parts[0][2].x);
  const y = Math.abs(_parts[0][0].y - _parts[0][2].y);

  return { centerOfRectangleLat, centerOfRectangleLng, x, y };
};
