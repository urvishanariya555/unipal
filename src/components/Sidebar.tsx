import mainLogo from '../assets/img/main-logo.svg'
import homeIcon from '../assets/img/home_outline_white.svg'
import feedsIcon from '../assets/img/feed.svg'
import HelpIcon from '../assets/img/help_outline.svg'
import offersIcon from '../assets/img/local_offer.svg'
import profileIcon from '../assets/img/user_outline.svg'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='max-[991px]:hidden min-w-[298px] max-w-[298px] border-r-[2px] border-[#CECECE] z-10 sticky top-0 bg-[#fff] max-h-[100vh]'>
        <div className='border-b border-[#CECECE] '>
          <div
            onClick={() => navigate("/home")}
            className='cursor-pointer py-[15px] px-[38px]'>
            <img src={mainLogo} alt="mainLogo" />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] py-[20px] w-[260px]">
          <div
            className='bg-[linear-gradient(100deg,_#6A58FB_6.63%,_#4599F4_101.7%)] 
            rounded-r-[12px] py-[15px] pl-[20px] text-md font-medium cursor-pointer 
            flex gap-[12px] items-center'
            onClick={() => navigate("/dashboard")}
          >
            <div><img src={homeIcon} alt="homeIcon"/></div>
            <div className="text-[#fff] text-[20px] font-bold">Home</div>
          </div>
          <div
            className='py-[10px] pl-[20px] text-md font-medium cursor-pointer 
            flex gap-[12px] items-center'
            onClick={() => navigate("/feeds")}
          >
            <div><img src={feedsIcon} alt="feedsIcon"/></div>
            <div className="text-[#111] text-[20px] font-semibold">Feeds</div>
          </div>
          <div
            className='py-[10px] pl-[20px] text-md font-medium cursor-pointer 
            flex gap-[12px] items-center'
            onClick={() => navigate("/help-me")}
          >
            <div><img src={HelpIcon} alt="HelpIcon"/></div>
            <div className="text-[#111] text-[20px] font-semibold">Help Me</div>
          </div>
          <div
            className='py-[10px] pl-[20px] text-md font-medium cursor-pointer 
            flex gap-[12px] items-center'
            onClick={() => navigate("/offers")}
          >
            <div><img src={offersIcon} alt="offersIcon"/></div>
            <div className="text-[#111] text-[20px] font-semibold">Offers</div>
          </div>
          <div
            className='py-[10px] pl-[20px] text-md font-medium cursor-pointer 
            flex gap-[12px] items-center'
            onClick={() => navigate("/profile")}
          >
            <div><img src={profileIcon} alt="profileIcon"/></div>
            <div className="text-[#111] text-[20px] font-semibold">Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
