import { useState } from "react";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import CustomRectangle from "./rectangle/CustomRectangle";
import { LatLngExpression } from "leaflet";
import { findCenterOfRectangleAndLong } from "../utils/findCenterOfRectangleAndLong";

const MyMap = () => {
  const [rectanglePosition, setRectanglePosition] = useState<number[]>([]);
  const [long, setLong] = useState<number[]>([]);

  const center: LatLngExpression = [51.505, -0.09];

  const created = (e: any) => {
    const { _latlngs, _parts } = e.layer;
    const { centerOfRectangleLat, centerOfRectangleLng, x, y } =
      findCenterOfRectangleAndLong(_latlngs, _parts);

    setLong((prev) => [...prev, [x, y]] as number[]);
    setRectanglePosition(
      (prev) =>
        [...prev, [centerOfRectangleLat, centerOfRectangleLng]] as number[]
    );
  };

  return (
    <MapContainer
      className="w-full h-screen	overflow-hidden border border-solid	 border-black"
      center={center}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={created}
          draw={{
            rectangle: true,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: false,
          }}
        />
      </FeatureGroup>
      {rectanglePosition.map((item: number, index: number) => (
        <CustomRectangle long={long[index]} key={index} position={item} />
      ))}
    </MapContainer>
  );
};

export default MyMap;
