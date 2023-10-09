import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Product from "../pages/Product";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Welcome from "../pages/Welcome";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";

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
        <Route path="otpVerification" element={<OtpVerification />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="product" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;