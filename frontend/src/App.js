import './App.css';
import {Register} from './Pages/register';
import { Login } from './Pages/login';
import { BrowserRouter as Router, Route,Routes, Switch} from "react-router-dom";
import {Home} from './Header/home';
import SuccessMessage from './Pages/successMessage';

function App() {
  
  return (
    <div >

      <Router>
      <Home/>
        <Routes>
        
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/success" element={<SuccessMessage/>} />
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
