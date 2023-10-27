
import { useNavigate } from "react-router-dom";
import mainSiteLogo from "../assets/img/app_icon.svg";
import short_lef from "../assets/img/short_left.svg";

const ForgotPassword = () => {

  const navigate = useNavigate()

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
                <div className="text-[32px] font-[700] text-[#283238] leading-none">Forgot Password</div>
                <div className="text-[16px] text-[#878C8F] text-center">Type your registered email, &  you will receive an OTP to reset your password.</div>
              </div>
              <form>
                <div className="w-full">
                  <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
                  <div className="border rounded mt-2 min-w-[449px] ">
                    <input
                      type="email"
                      placeholder="Type Email Here"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div>
                  <div
                    role="button"
                    onClick={() => navigate("/otp-verification")}
                    className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                      rounded-[12px] text-[18px] font-[600] mt-[20px]">
                    Send OTP
                  </div>
                </div>
              </form>
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
        <div className="flex justify-start pb-[20px] pt-[20px] sticky top-0 bg-[#fff] z-1">
          <img src={short_lef} className="h-[24px]" onClick={() => navigate("/login")} />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <div className="text-[24px] font-[700] text-[#283238] leading-none">Forgot Password?</div>
          <div className="text-[14px] text-[#878C8F] pb-[30px]">Type your registered email, &  you will receive an OTP to reset your password.</div>
        </div>
        <form>
          <div className="">
            <label className="text-sm font-medium text-[#878C8F]">Email/Phone Number</label>
            <div className="border rounded mt-2 w-full">
              <input
                type="email"
                placeholder="Type Email Here"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] 
                px-[20px] rounded-[10px]"
              />
            </div>
          </div>
          <div>
            <div
              role="button"
              onClick={() => navigate("/otp-verification")}
              className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
              Send OTP
            </div>
          </div>
        </form>
        <div className="text-center text-[#686868] font-[600] mt-[40px] mb-[30px]">
          Remember Password?
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer underline underline-offset-1 text-blue-400 ml-1">
            Sign In
          </span>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
