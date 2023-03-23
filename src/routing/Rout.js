import Footer from "components/footer-io/Footer";
import NavbarComponent from "components/navbar-io/Navbar";
import LandingPage from "pages/client/LandingPage";
import Dashboard from "pages/dashboard/Dashboard";
import {
  Route,
  Routes
} from "react-router-dom";
import "../App.css";
import ChangePassword from "../pages/auth/ChangePassword";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Register";

function Rout() {

  return (

      <div>
      <NavbarComponent />
      <div classname="py-5">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<LandingPage />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/forgotpassword" exact element={<ForgotPassword />} />
          <Route path="/changepassword" exact element={<ChangePassword />} />

        </Routes>
      </div>
      <div className="mt-5 footer-wraper">
        <Footer />
      </div>
      
      </div>
   
  );
}

export default Rout;