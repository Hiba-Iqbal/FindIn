import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { getLat, getLng } from "../../utils/helper";

export const Map = ({ location, data, zoom = 13 }) => {
  const [map, setMap] = useState(null);
  const lat = getLat(location);
  const lng = getLng(location);
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <MapContainer
      zoom={zoom}
      scrollWheelZoom={false}
      center={[lat, lng]}
      whenCreated={setMap}>
      <ChangeView center={[lat, lng]} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
      />
      {data && (
        <Marker position={[getLat(location), getLng(location)]}>
          <Popup>{data.companyName}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export const JobMap = ({ lat, lng, zoom = 13, data }) => {
  const [map, setMap] = useState(null);
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <MapContainer
      zoom={zoom}
      scrollWheelZoom={false}
      center={[lat, lng]}
      whenCreated={setMap}>
      <ChangeView center={[lat, lng]} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
      />
      {data && (
        <Marker position={[lat, lng]}>
          <Popup>{data.companyName}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
