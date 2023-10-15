import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
    <div className="flex min-h-[100vh] bg-[#f0f0f0]" style={{fontFamily: 'Inter, sans-serif'}}>
      <Sidebar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
      
    </>
  );
};

export default Layout;
