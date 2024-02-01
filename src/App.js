import Map from './MapComponents/Map'
import './App.css'
import Authorization from './pages/Authorization';
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Map />}></Route> 
        <Route path="/authorization" element={<Authorization />}></Route>
        <Route path="/registration" element={<Registration />}> </Route>
      </Routes>   
    </div>
    
  );
}
export default App;
