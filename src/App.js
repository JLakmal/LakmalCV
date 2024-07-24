import "./App.css";
// import { Profile, AboutMe } from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/MainLayout.css";
import Navibar from "./Component/Nav";
import Rectnagle from "./assets/Images/Project img/Rectangle 24.png";
import Dot from "./assets/Images/Project img/Dots.png";
function App() {
  return (
    <div className="main-layout">
      <Navibar />
      <div className="fixed-symbols">
        <div className="rectangle left">
          <img src={Rectnagle} alt="rectangle" />
        </div>
        <div className="rectangle left2">
          <img src={Rectnagle} alt="rectangle" />
        </div>

        <div className="rectangle right">
          {" "}
          <img src={Dot} alt="rectangle" />
        </div>
        {/* <div className="rectangle right">
            {" "}
            <img src={Rectnagle} alt="rectangle" />
          </div> */}
        {/* <div className="round left"></div>
        <div className="round right"></div> */}
      </div>
    </div>
  );
}

export default App;
