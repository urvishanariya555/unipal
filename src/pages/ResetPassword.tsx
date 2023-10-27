import { useNavigate } from "react-router-dom";
import mainSiteLogo from "../assets/img/app_icon.svg";
import short_lef from "../assets/img/short_left.svg";
import eyeShow from "../assets/img/hide.png";

const ResetPassword = () => {

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
                <div className="text-[32px] font-[700] text-[#283238] leading-none">Reset Password</div>
                <div className="text-[16px] text-[#878C8F] text-center">Enter and confirm your new password below.</div>
              </div>
              <form>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Password</label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="password"
                      placeholder="Type Password"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                    <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Confirm Password</label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="password"
                      placeholder="Type Confirm Password"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                    <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
                  </div>
                </div>
                <div
                role="button"
                  onClick={() => navigate("/login")}
                  className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
                  Save
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="res-login px-[15px]">
        <div className="flex justify-start pb-[20px] pt-[20px] sticky top-0 bg-[#fff] z-1">
          <img src={short_lef} className="h-[24px]" onClick={() => navigate("/login")}/>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <div className="text-[24px] font-[700] text-[#283238] leading-none">Reset Password</div>
          <div className="text-[14px] text-[#878C8F] pb-[30px]">Enter and confirm your new password below.</div>
        </div>
        <form>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Password</label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="password"
                placeholder="Type Password"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
              <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Confirm Password</label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="password"
                placeholder="Type Confirm Password"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
              <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute" />
            </div>
          </div>
          <div
          role="button"
            onClick={() => navigate("/login")}
            className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
              rounded-[12px] text-[18px] font-[600] mt-[20px]">
            Save
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
