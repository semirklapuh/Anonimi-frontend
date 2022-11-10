import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./navbar/Navbar";
import Hero from "./WelcomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./Registration/Register";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
