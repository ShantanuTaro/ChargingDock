import './App.css';
import { CustomerLogin } from './Customer/CustomerLogin';
import { BrowserRouter as Router, Route,Routes, Switch} from "react-router-dom";
import {Home} from './Header/home';
import SuccessMessage from './Charger/ChargerList';
import AgentRegistration from './Agent/AgentRegistration';
import {AgentLogin} from './Agent/AgentLogin';
import ChargerRegistration  from "./Charger/chargerRegistration";
import MapMain from './Agent/MapMain';
import { CustomerRegisteration } from './Customer/CustomerRegisteration';
import ChargingDockList from './Charger/ChargerList';
import AgentDockRegistration from './Agent/AgentDockRegistration';

function App() {
  
  return (
    <div >

      <Router>
      <Home/>
        <Routes>
        
        <Route exact path="/customerLogin" element={<CustomerLogin/>} />
        <Route exact path="/customerRegistration" element={<CustomerRegisteration/>} />
        <Route exact path="/ChargingDockList" element={<ChargingDockList/>} />
        <Route exact path="/agentLogin" element={<AgentLogin/>} />
        <Route exact path="/agentRegistration" element={<AgentRegistration/>} />
        <Route exact path="/chargerRegistration" element={<ChargerRegistration/>} />
        <Route exact path="/mapView" element={<MapMain/>} />
        <Route exact path="/AgentDockRegistration" element={<AgentDockRegistration count={3}/>} />
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
