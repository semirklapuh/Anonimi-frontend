import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";

import "../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login/Login";
import Forgot from "./page/ForgotPass/Forgot";
import Registration from "./page/SignUp/Register";
import AdminPanel from "./page/AdminPanel/AdminPanel";
import { AboutAI } from "./page/FeaturesPage/FeatureItems";
import { Pricing } from "./page/Pricing";
import { AnonimiPlatform } from "./page/AnonimiPlatform";
import { AnonimiFeatures } from "./page/AnonimiFeatures";
import { About } from "./page/About";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/about-ai" element={<AboutAI />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/anonimi-features" element={<AnonimiFeatures />} />
        <Route path="/anonimi-platform" element={<AnonimiPlatform />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
