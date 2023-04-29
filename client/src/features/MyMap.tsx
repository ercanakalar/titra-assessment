import { useState } from "react";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import CustomRectangle from "./rectangle/CustomRectangle";
import { LatLngExpression } from "leaflet";
import * as turf from "@turf/turf";
import { IPosition } from "../types/positionType";

const MyMap = () => {
  const [rectanglePosition, setRectanglePosition] = useState<IPosition[][]>([]);
  const [area, setArea] = useState<number[]>([]);

  const center: LatLngExpression = [51.505, -0.09];

  const created = (e: any) => {
    // We access the polygon layer by using e.layer.toGeoJSON()
    setArea((prev) => [...prev, Math.floor(turf.area(e.layer.toGeoJSON()))]);

    const { _latlngs } = e.layer;
    setRectanglePosition((prev) => [...prev, _latlngs]);
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
      {rectanglePosition.map((position: IPosition[], index: number) => (
        <CustomRectangle area={area[index]} key={index} position={position} />
      ))}
    </MapContainer>
  );
};

export default MyMap;
