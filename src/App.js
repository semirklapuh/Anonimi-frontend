import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import Hero from "./page/WelcomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./page/Registration/Register";
import Showcase from "./page/Showcase";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
