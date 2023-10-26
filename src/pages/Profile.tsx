import mainProfileImage from '../assets/img/user_img.png'
import home_outline from '../assets/footer-mobile/home_outline.svg'
import MyProfile_active from '../assets/footer-mobile/MyProfile_active.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-lg-[30px] p-[16px] min-h-[calc(100vh_-_60px)] min-[992px]:min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        <div className='text-[18px] font-[700] mb-[8px]'>My Profile</div>
        <div className='xl:w-[70%] lg:w-[80%] w-full mx-auto'>
          <div className='flex justify-center flex-col items-center'>
            <img src={mainProfileImage} alt='mainProfileImage' className='h-[84px] w-[84px] rounded-[84px] object-cover' />
          <div className='bg-[#d5d7d880] rounded-[10px] w-[88px] h-[40px] flex items-center justify-center mt-[20px] mb-[13px]'>Mr</div>
          </div>
          <form>
            <div className='grid md:grid-cols-2 gap-[15px]'>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">First Name</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="Type First Name Here"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">Last Name</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="Type Last Name Here"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px]"
                  />
                </div>
              </div>
              <div className='flex gap-[20px]'>
                <div className="">
                  <label className="text-sm font-medium text-[#878C8F]">Country Code</label>
                  <div className="border rounded mt-2 w-[95px]">
                    <input
                      type="text"
                      placeholder="+91"
                      className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-sm font-medium text-[#878C8F]">Contact Number</label>
                  <div className="border rounded mt-2 ">
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">Are you a Student?</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="yes"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">Please select Country</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="New York"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">Email Address</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="Email Id"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#878C8F]">Country</label>
                <div className="border rounded mt-2 ">
                  <input
                    type="text"
                    placeholder="New York"
                    className="focus-visible:border-indigo-500/100 outline-none 
                    w-full p-[16px] px-[20px] rounded-[10px] w-full"
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-[15px] pt-[17px] justify-center'>
              <div className='w-[165px] h-[55px] bg-[#666666] text-[#fff] rounded-[12px] flex justify-center items-center'>Cancel</div>
              <div className='w-[165px] h-[55px] bg-[#000000] text-[#fff] rounded-[12px] flex justify-center items-center'>Submit</div>
            </div>
          </form>
        </div>
      </div>
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>           
        <div className='flex justify-center items-center flex-col relative gap-y-[5px]' 
          onClick={() => navigate("/dashboard")}>            
            <div><img src={home_outline} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Home</div>
          </div>        
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/feeds")}>            
            <div><img src={newsLaterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/help-me")}>            
            <div><img src={HelpFooterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Help Me</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/offers")}>
            
            <div><img src={localOfferIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/profile")}>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={MyProfile_active} alt='MyProfile_active' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Profile;
