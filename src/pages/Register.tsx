import { useNavigate } from "react-router-dom";
import mainSiteLogo from "../assets/img/app_icon.svg";
import short_lef from "../assets/img/short_left.svg";
import referIcon from "../assets/img/referal-code.svg";
import eyeShow from "../assets/img/hide.png";

const Register = () => {

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
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-[32px] font-[700] text-[#283238] leading-none">Welcome Back!</div>
                <div className="text-[16px] text-[#878C8F]">Enter your email address and password.</div>
              </div>
              <form>
                <div>
                  <label className="text-sm font-medium text-[#878C8F]">Name</label>
                  <div className="border rounded mt-2 w-[449px] flex items-center">
                    <div className="dropdown">
                      <a className="flex items-center rounded-r-[0px] btn btn-secondary dropdown-toggle bg-[#D4D6D7] border-[#D4D6D7] text-[#283238] h-[56px]" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mr.
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"> Mr.</a></li>
                        <li><a className="dropdown-item" href="#"> Mrs.</a></li>
                        <li><a className="dropdown-item" href="#"> Miss.</a></li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      placeholder="Type Name Here"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Phone Number</label>
                  <div className="border rounded mt-2 w-[449px] flex items-center">
                    <div className="dropdown">
                      <a className="flex items-center rounded-r-[0px] btn btn-secondary dropdown-toggle bg-[#D4D6D7] border-[#D4D6D7] text-[#283238] h-[56px]" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        +91
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"> +92</a></li>
                        <li><a className="dropdown-item" href="#"> +93</a></li>
                        <li><a className="dropdown-item" href="#"> +94</a></li>
                      </ul>
                    </div>
                    <input
                      type="number"
                      placeholder="Type Number Here"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
                  <div className="border rounded mt-2 w-[449px]">
                    <input
                      type="email"
                      placeholder="Type Email Here"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Password</label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="password"
                      placeholder="Type Password"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                    <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute cursor-pointer" />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F]">Confirm Password</label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="password"
                      placeholder="Type Conform Password"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                    <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute cursor-pointer" />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <label className="text-sm font-medium text-[#878C8F] flex items-center">Referral Code<img src={referIcon} className="ml-1" /></label>
                  <div className="border rounded mt-2 relative w-[449px]">
                    <input
                      type="text"
                      placeholder="Type Code Here"
                      className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
                  </div>
                </div>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
                  Sign Up
                </button>
              </form>
              <div className="text-center text-[#686868] font-[600]">
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
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
          <img src={short_lef} className="h-[24px]" onClick={() => navigate("/login")}/>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <div className="text-[24px] font-[700] text-[#283238] leading-none">Create your account</div>
          <div className="text-[14px] text-[#878C8F] pb-[50px]">Enter your details below to create new account.</div>
        </div>
        <form>
          <div>
            <label className="text-sm font-medium text-[#878C8F]">Name</label>
            <div className="border rounded mt-2 w-full flex items-center">
              <div className="dropdown">
                <a className="flex items-center rounded-r-[0px] btn btn-secondary dropdown-toggle bg-[#D4D6D7] border-[#D4D6D7] text-[#283238] h-[56px]" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mr.
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"> Mr.</a></li>
                  <li><a className="dropdown-item" href="#"> Mrs.</a></li>
                  <li><a className="dropdown-item" href="#"> Miss.</a></li>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Type Name Here"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
              />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Phone Number</label>
            <div className="border rounded mt-2 w-full flex items-center">
              <div className="dropdown">
                <a className="flex items-center rounded-r-[0px] btn btn-secondary dropdown-toggle bg-[#D4D6D7] border-[#D4D6D7] text-[#283238] h-[56px]" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  +91
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"> +92</a></li>
                  <li><a className="dropdown-item" href="#"> +93</a></li>
                  <li><a className="dropdown-item" href="#"> +94</a></li>
                </ul>
              </div>
              <input
                type="number"
                placeholder="Type Number Here"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
              />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
            <div className="border rounded mt-2 w-full">
              <input
                type="email"
                placeholder="Type Email Here"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]"
              />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Password</label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="password"
                placeholder="Type Password"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
              <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute cursor-pointer" />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F]">Confirm Password</label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="password"
                placeholder="Type Conform Password"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
              <img src={eyeShow} className="h-[18px] right-[15px] top-[20px] absolute cursor-pointer" />
            </div>
          </div>
          <div className="mt-[15px]">
            <label className="text-sm font-medium text-[#878C8F] flex items-center">Referral Code<img src={referIcon} className="ml-1" /></label>
            <div className="border rounded mt-2 relative w-full">
              <input
                type="text"
                placeholder="Type Code Here"
                className="focus-visible:border-indigo-500/100 outline-none w-full p-[16px] px-[20px] rounded-[10px]" />
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full cursor-pointer bg-[#000] text-white text-center p-[17px] 
                rounded-[12px] text-[18px] font-[600] mt-[20px]">
            Sign Up
          </button>
        </form>
        <div className="text-center text-[#686868] font-[600] mt-[40px] mb-[30px]">
          Already user?
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

export default Register;
