import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./page/SignUp/Register";
import Main from "./page/Main";
import Login from "./page/Login/Login";
import Forgot from "./page/ForgotPass/Forgot";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
