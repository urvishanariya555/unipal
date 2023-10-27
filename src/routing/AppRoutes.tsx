import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Welcome from "../pages/Welcome";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";
import Feeds from "../pages/Feeds";
import HelpMe from "../pages/HelpMe";
import Profile from "../pages/Profile";
import Offers from "../pages/Offers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verification" element={<OtpVerification />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="help-me" element={<HelpMe />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="offers" element={<Offers />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;