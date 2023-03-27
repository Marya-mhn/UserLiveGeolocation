import style from "../../styles/Home.module.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { mapRef } from "react";
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import cities from "./cities.json";
import LocationMarker from "./locationMarker";

const icon = L.icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

const Map = () => {
  return (
    <MapContainer
      className={style.map}
      center={{ lat: 36.752887, lng: 3.042048 }}
      zoom={10}
      scrollWheelZoom={true}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city, idx) => (
        <Marker position={[city.lat, city.lng]} icon={icon} key={idx}>
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
      <LocationMarker />
    </MapContainer>
  );
};
export default Map;
