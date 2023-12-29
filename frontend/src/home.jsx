import { useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate(); 
  const routeLoginChange = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
  }

  const routeRegisterChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
    return (
      <div className="App">
       <button onClick={routeLoginChange}>Login</button>
       <button onClick={routeRegisterChange}>Register</button>
      </div>
    );
  }
  
  export default Home;