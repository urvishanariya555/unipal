import offerMainImg from '../assets/img/feeds_menu_image.png'
import home_outline from '../assets/footer-mobile/home_outline.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import local_offer_active from '../assets/footer-mobile/local_offer_active.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate()
  const [goToOffers, setGoToOffers] = useState(false)
  return (
    <>
      <div className="p-lg-[30px] p-[16px] min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_306px)] min-[1920px]:max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        <div className='w-full'>
          <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
            Student Offers
          </div>
          {!goToOffers &&
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
              <div className='bg-[#fff] rounded-[19px] p-[15px] cursor-pointer'
                onClick={() => setGoToOffers(true)}
              >
                <div className='flex justify-between mb-[12px]'>
                  <div className='text-[#283238] text-[14px]'>15 March 2023</div>
                  <div className='text-[#283238] text-[14px]'>ends in15:00:00</div>
                </div>
                <div className='w-full'>
                  <img src={offerMainImg} alt='offerMainImg' className='h-[190px] rounded-[10px] w-full' />
                </div>
                <div className='text-[#808080] mt-[9px] leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
              </div>
              <div className='bg-[#fff] rounded-[19px] p-[15px] cursor-pointer'
                onClick={() => setGoToOffers(true)}
              >
                <div className='flex justify-between mb-[12px]'>
                  <div className='text-[#283238] text-[14px]'>15 March 2023</div>
                  <div className='text-[#283238] text-[14px]'>ends in15:00:00</div>
                </div>
                <div className='w-full'>
                  <img src={offerMainImg} alt='offerMainImg' className='h-[190px] rounded-[10px] w-full' />
                </div>
                <div className='text-[#808080] mt-[9px] leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
              </div>
              <div className='bg-[#fff] rounded-[19px] p-[15px] cursor-pointer'
                onClick={() => setGoToOffers(true)}
              >
                <div className='flex justify-between mb-[12px]'>
                  <div className='text-[#283238] text-[14px]'>15 March 2023</div>
                  <div className='text-[#283238] text-[14px]'>ends in15:00:00</div>
                </div>
                <div className='w-full'>
                  <img src={offerMainImg} alt='offerMainImg' className='h-[190px] rounded-[10px] w-full' />
                </div>
                <div className='text-[#808080] mt-[9px] leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
              </div>
              <div className='bg-[#fff] rounded-[19px] p-[15px] cursor-pointer'
                onClick={() => setGoToOffers(true)}
              >
                <div className='flex justify-between mb-[12px]'>
                  <div className='text-[#283238] text-[14px]'>15 March 2023</div>
                  <div className='text-[#283238] text-[14px]'>ends in15:00:00</div>
                </div>
                <div className='w-full'>
                  <img src={offerMainImg} alt='offerMainImg' className='h-[190px] rounded-[10px] w-full' />
                </div>
                <div className='text-[#808080] mt-[9px] leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
              </div>
            </div>
          }
          {goToOffers &&
            <>
              <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[22px] gap-y-[15px]'>
                <div className='bg-[#fff] overflow-hidden rounded-[10px] shadow-sm p-[8px] flex items-center gap-[12px] relative'>
                  <div className='h-[100px] w-[100px] min-w-[100px] rounded-[7px] bg-[#D9D9D9] object-cover'></div>
                  <div>
                    <div className='line-clamp-2 leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
                    <div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>Chemistry</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Country <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>United kingdom</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#6EBF5A] text-[11px] font-[600]'>Online</div>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-tl-[10px] bg-[#7CA1FF] text-[14px] font-[600] text-[#fff] p-[4px] px-[15px] absolute bottom-0 right-0'>
                    Get Now
                  </div>
                </div>
                <div className='bg-[#fff] overflow-hidden rounded-[10px] shadow-sm p-[8px] flex items-center gap-[12px] relative'>
                  <div className='h-[100px] w-[100px] min-w-[100px] rounded-[7px] bg-[#D9D9D9] object-cover'></div>
                  <div>
                    <div className='line-clamp-2 leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
                    <div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>Chemistry</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Country <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>United kingdom</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#6EBF5A] text-[11px] font-[600]'>Online</div>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-tl-[10px] bg-[#7CA1FF] text-[14px] font-[600] text-[#fff] p-[4px] px-[15px] absolute bottom-0 right-0'>
                    Get Now
                  </div>
                </div>
                <div className='bg-[#fff] overflow-hidden rounded-[10px] shadow-sm p-[8px] flex items-center gap-[12px] relative'>
                  <div className='h-[100px] w-[100px] min-w-[100px] rounded-[7px] bg-[#D9D9D9] object-cover'></div>
                  <div>
                    <div className='line-clamp-2 leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
                    <div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>Chemistry</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Country <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>United kingdom</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#6EBF5A] text-[11px] font-[600]'>Online</div>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-tl-[10px] bg-[#7CA1FF] text-[14px] font-[600] text-[#fff] p-[4px] px-[15px] absolute bottom-0 right-0'>
                    Get Now
                  </div>
                </div>
                <div className='bg-[#fff] overflow-hidden rounded-[10px] shadow-sm p-[8px] flex items-center gap-[12px] relative'>
                  <div className='h-[100px] w-[100px] min-w-[100px] rounded-[7px] bg-[#D9D9D9] object-cover'></div>
                  <div>
                    <div className='line-clamp-2 leading-[21px]'>We are here to discuss about your new tasks & Existing Offers</div>
                    <div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>Chemistry</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Country <span className='mr-1'>:</span></div>
                        <div className='text-[#808080] text-[11px] font-[600]'>United kingdom</div>
                      </div>
                      <div className='flex items-center '>
                        <div className='w-[62px] text-[#808080] text-[11px] font-[500] flex justify-between'>Category <span className='mr-1'>:</span></div>
                        <div className='text-[#6EBF5A] text-[11px] font-[600]'>Online</div>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-tl-[10px] bg-[#7CA1FF] text-[14px] font-[600] text-[#fff] p-[4px] px-[15px] absolute bottom-0 right-0'>
                    Get Now
                  </div>
                </div>
              </div>
            </>
          }
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
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={local_offer_active} alt='local_offer_active.svg' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'
          onClick={() => navigate("/profile")}>
            <div><img src={profileIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Offers;
