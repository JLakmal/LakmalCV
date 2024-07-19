import "./App.css";
// import { Profile, AboutMe } from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./Component/Nav";

function App() {
  // const Page = styled.div`
  //   background-color: #282c33;
  //   height: 100vh; /* Ensures the background covers the full viewport height */
  //   margin: 0;
  //   padding: 0;
  // `;

  // const SubPage = styled.div`
  //   background-color: #212936;
  //   height: 100vh; /* Ensures the background covers the full viewport height */
  //   margin-left: 10rem;
  //   margin-right: 10rem;
  //   padding: 0%;

  return (
    <div className="dot">
      <Navibar />
    </div>
  );
}

export default App;
