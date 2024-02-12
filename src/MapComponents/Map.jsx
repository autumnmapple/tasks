import "leaflet/dist/leaflet.css";
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import { useState } from "react";
import Header from "../components/Header";
import Calendar from '../components/Calendar'
import Settings from "../components/Settings";
const position = [51.505, -0.09];

const Map = () => {
  //const [email, setEmail]=useState('');
  //const [password, setPassword]=useState('');
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup></Popup>  
          <Header />
          <Calendar />
          <Settings/>
        </Marker>
      </MapContainer> 
    </>
  );
}
export default Map;