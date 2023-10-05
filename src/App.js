import './App.css';
import "leaflet/dist/leaflet.css"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
const position = [51.505, -0.09]
function App() {
  return ( 
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <input type="date" id="start" name="trip-start" value="2023-10-01" min="2023-01-01" max="2023-12-31" />
      <Popup>
        qwe
      </Popup>
    </Marker>    
    </MapContainer>  
  );
}

export default App;
