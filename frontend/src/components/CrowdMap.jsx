import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function CrowdMap() {
  return (
    <MapContainer
      center={[25.4358, 81.8463]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[25.4358, 81.8463]}>
        <Popup>Sangam Area</Popup>
      </Marker>
    </MapContainer>
  );
}

export default CrowdMap;