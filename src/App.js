import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./page/Registration/Register";
import Main from "./page/Main";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
