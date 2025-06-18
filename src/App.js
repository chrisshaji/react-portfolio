
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import AutonomousRCCar from "./pages/AutonomousRCCar";
import ASMEGoKart from "./pages/ASMEGoKart";
import RubiksCubeSolver from "./pages/RubiksCubeSolver";
import ChildrensMuseum from "./pages/ChildrensMuseum";
import Strandbeest from "./pages/Strandbeest";
import ScissorLift from "./pages/ScissorLift";
import KitchenOrganizer from "./pages/KitchenOrganizer";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Projects />
              <Footer />
            </>
          } />
          <Route path="/projects/autonomous-rc-car" element={<AutonomousRCCar />} />
          <Route path="/projects/asme-go-kart" element={<ASMEGoKart />} />
          <Route path="/projects/rubiks-cube-solver" element={<RubiksCubeSolver />} />
          <Route path="/projects/childrens-museum" element={<ChildrensMuseum />} />
          <Route path="/projects/strandbeest" element={<Strandbeest />} />
          <Route path="/projects/scissor-lift" element={<ScissorLift />} />
          <Route path="/projects/kitchen-organizer" element={<KitchenOrganizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
