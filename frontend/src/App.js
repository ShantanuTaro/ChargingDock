import './App.css';
import {Register} from './Pages/register';
import { Login } from './Pages/login';
import { BrowserRouter as Router, Route,Routes, Switch} from "react-router-dom";
import {Home} from './Header/home';
import SuccessMessage from './Pages/successMessage';
import AgentRegistration from './Agent/AgentRegistration';
import {AgentLogin} from './Agent/AgentLogin';
import ChargerRegistration  from "./Charger/chargerRegistration";
import MapMain from './Agent/MapMain';

function App() {
  
  return (
    <div >

      <Router>
      <Home/>
        <Routes>
        
        <Route exact path="/customerLogin" element={<Login/>} />
        <Route exact path="/customerRegistration" element={<Register/>} />
        <Route exact path="/success" element={<SuccessMessage/>} />
        <Route exact path="/agentLogin" element={<AgentLogin/>} />
        <Route exact path="/agentRegistration" element={<AgentRegistration/>} />
        <Route exact path="/chargerRegistration" element={<ChargerRegistration/>} />
        <Route exact path="/mapView" element={<MapMain/>} />

        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
