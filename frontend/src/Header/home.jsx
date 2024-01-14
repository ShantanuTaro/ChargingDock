import { useNavigate } from "react-router-dom";
import "./home.css";


export const Home = () => {
  let navigate = useNavigate();
  const routeLoginChange = () => {
    let path = `/customerLogin`;
    navigate(path);
  }

  const routeRegisterChange = () => {
    let path = `/register`;
    navigate(path);
  }
  return (
    // <div className="App">
    <div className="navigation">
      <div className="div">
        <div className="text-wrapper">Charging Dock</div>

        <div>
          <div className="text-wrapper-2">Home</div>
        <div className="text-wrapper-3">Testimonials</div>
        <div className="text-wrapper-4">Who we are</div>
        <div className="text-wrapper-5">My profile</div>
        <button className="cart-button" onClick={routeLoginChange}>
          <div className="text-wrapper-6">Login</div>
          <img className="ellipse" alt="Ellipse" src="ellipse-280.svg" />
        </button>
      </div>
        </div>
      {/* <button onClick={routeLoginChange}>Login</button>
       <button onClick={routeRegisterChange}>Register</button> */}
    </div>


    // </div>
  );
}

