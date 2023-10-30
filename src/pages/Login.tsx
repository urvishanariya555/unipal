import { useNavigate } from "react-router-dom";
import mainSiteLogo from "../assets/img/app_icon.svg";
import facebookIcon from "../assets/img/facebook.svg";
import googleIcon from "../assets/img/google.svg";
import eyeShow from "../assets/img/hide.png";
import { Checkbox } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="loginBg">
        <div className="translate-center">
          <div className="flex justify-center mb-[20px]">
            <img src={mainSiteLogo} className="h-20" />
          </div>
          <div className="bg-[#fff] text-black px-[165px] py-[50px] rounded-[20px] max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex flex-col justify-center items-center gap-2 ">
                <div className="text-[32px] font-[700] text-[#283238] leading-none">Welcome Back!</div>
                <div className="text-[16px] text-[#878C8F] ">Enter your Email Address and Password</div>
              </div>
              <form>
                <div className="">
                  <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
                  <div className="border rounded mt-2 w-[449px]">
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Password</label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="password"
                      placeholder="Your Secret"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                    <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center ml-[-10px] mt-[8px]">
                    <Checkbox defaultChecked />
                    <div>Remember Me</div>
                  </div>
                  <div
                    onClick={() => navigate("/forgot-password")}
                    className="cursor-pointer font-medium text-[#5254CF]">
                    Forgot Password
                  </div>
                </div>
                <div
                  onClick={() => navigate("/dashboard")}
                  className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
                  Sign In
                </div>
              </form>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-[50px] bg-[#00000033]"></div>
                <div className="text-[14px] text-[#686868]">Or Login with</div>
                <div className="h-[1px] w-[50px] bg-[#00000033]"></div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={facebookIcon} alt="facebookIcon" />
                  Sign up with Facebook
                </div>
                <div className="w-[449px] border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
                  <img src={googleIcon} alt="googleIcon" />
                  Sign up with Google
                </div>
              </div>
              <div className="text-center text-[#686868] font-[600]">
                Don’t have an account?
                <span
                  onClick={() => navigate("/register")}
                  className="cursor-pointer underline underline-offset-1 text-blue-400 ml-1">
                  Sign Up
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
          <div className="text-[24px] font-[700] text-[#283238] leading-none">Welcome Back!</div>
          <div className="text-[14px] text-[#878C8F] pb-[27px]">Enter your Email Address and Password</div>
        </div>
        <form>
          <div className="">
            <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
            <div className="border rounded mt-2 w-full">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
              />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Password</label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="password"
                placeholder="Your Secret"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
              <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-[-10px] mt-[8px]">
              <Checkbox defaultChecked />
              <div>Remember Me</div>
            </div>
            <div
              onClick={() => navigate("/forgot-password")}
              className="cursor-pointer font-medium text-[#5254CF]">
              Forgot Password
            </div>
          </div>
          <div
            onClick={() => navigate("/dashboard")}
            className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
            Sign In
          </div>
        </form>
        <div className="flex items-center justify-center gap-4 mt-[30px] mb-[30px]">
          <div className="h-[1px] w-[50px] bg-[#00000033]"></div>
          <div className="text-[14px] text-[#686868]">Or Login with</div>
          <div className="h-[1px] w-[50px] bg-[#00000033]"></div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
            <img src={facebookIcon} alt="facebookIcon" />
            Sign up with Facebook
          </div>
          <div className="w-full border border-[#BEBEBE] rounded-[10px] text-[18px] text-[#363636] font-[500] flex items-center gap-[15px] justify-center p-[18px]">
            <img src={googleIcon} alt="googleIcon" />
            Sign up with Google
          </div>
        </div>
        <div className="text-center text-[#686868] font-[600] mt-[40px] mb-[30px]">
        New user?
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer text-blue-400 ml-1">
            Create Account
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
