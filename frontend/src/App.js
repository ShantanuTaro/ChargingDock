import './App.css';
import Register from './register';
import { Login } from './login';
import { BrowserRouter as Router, Route,Routes, Switch} from "react-router-dom";
import Home from './home';
import SuccessMessage from './successMessage';

function App() {
  
  return (
    <div >
      

      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/success" element={<SuccessMessage/>} />
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
