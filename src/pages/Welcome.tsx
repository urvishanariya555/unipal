import { useNavigate } from "react-router-dom";
import mainSiteLogo from "../assets/img/app_icon.svg";
import facebookIcon from "../assets/img/facebook.svg";
import googleIcon from "../assets/img/google.svg";
import emailIcon from "../assets/img/mail_login.svg";
import appleIcon from "../assets/img/apple_login.svg";
import mobileIcon from "../assets/img/mobile_login.svg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="loginBg">
        <div className="translate-center">
          <div className="flex justify-center mb-[20px]">
            <img src={mainSiteLogo} className="h-20" />
          </div>
          <div className="bg-[#fff] text-black min-[992px]:px-[165px] py-[50px] rounded-[20px] min-[992px]:max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex flex-col justify-center items-center gap-2 ">
                <div className="text-[32px] font-[700] text-[#283238] leading-none">Create Your Account</div>
                <div className="text-[16px] text-[#878C8F] ">Create your account using Google, Facebook or with Email.</div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="cursor-pointer w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={facebookIcon} alt="facebookIcon" />
                  Sign up with Facebook
                </div>
                <div className="cursor-pointer w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={googleIcon} alt="googleIcon" />
                  Sign up with Google
                </div>
                <div className="cursor-pointer w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={emailIcon} alt="facebookIcon" />
                  Sign up with Email
                </div>
                <div className="cursor-pointer w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={appleIcon} alt="googleIcon" />
                  Sign up with Google
                </div>
                <div className="cursor-pointer w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={mobileIcon} alt="facebookIcon" />
                  Sign up with Mobile
                </div>
              </div>
              <div className="text-center text-[#686868] font-[600]">
              Already have an account?
                <span
                  onClick={() => navigate("/register")}
                  className="cursor-pointer underline underline-offset-1 text-blue-400 ml-1">
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="res-login px-[15px]">
        <div className="flex justify-center mb-[20px] mt-[20px]">
          <img src={mainSiteLogo} className="h-[45px]" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <div className="text-[24px] font-[700] text-[#283238] leading-none">Create Your Account</div>
          <div className="text-[14px] text-[#878C8F] pb-[27px]">Create your account using Google, Facebook or with Email.</div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[16px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[14px]">
            <img src={facebookIcon} alt="facebookIcon" />
            Sign up with Facebook
          </div>
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[16px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[14px]">
            <img src={googleIcon} alt="googleIcon" />
            Sign up with Google
          </div>
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[16px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[14px]">
            <img src={emailIcon} alt="facebookIcon" />
            Sign up with Email
          </div>
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[16px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[14px]">
            <img src={appleIcon} alt="googleIcon" />
            Sign up with Google
          </div>
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[16px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[14px]">
            <img src={mobileIcon} alt="facebookIcon" />
            Sign up with Facebook
          </div>
        </div>
        <div className="text-center text-[#686868] font-[600] mt-[20px]">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer underline underline-offset-1 text-blue-400 ml-1">
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default Welcome;
