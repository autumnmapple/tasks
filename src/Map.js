import "leaflet/dist/leaflet.css";
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ParentComponent from "./components/ParentComponent";
const position = [51.505, -0.09];

const Map = () => {
  return (
    <div>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>qwe</Popup> 
          <ParentComponent/>
          <div className="txt"><p>Leaflet</p></div> 
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;