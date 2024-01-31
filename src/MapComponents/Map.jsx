import "leaflet/dist/leaflet.css";
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
//import Header from "../components/Header/Header";
import ParentComponent from "../components/ParentComponent";
import Header from "../components/Header";
const position = [51.505, -0.09];

const Map = () => {
  //const [map,setMap] = useState(null)
  //const [email, setEmail]=useState('');
  //const [password, setPassword]=useState('');
  return (
    <>
      {/* <MapContainer center={position} zoom={13} scrollWheelZoom={true} ref={setMap}>  */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup></Popup> 
          {/* <ParentComponent map={map}/>  */}  
          <Header />
        </Marker>
      </MapContainer>
    </>
  );
}
export default Map;