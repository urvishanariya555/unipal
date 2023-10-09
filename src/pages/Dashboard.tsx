import morningImg from '../assets/img/sunrise.svg'
import dashboardImg from '../assets/img/breking_new.png'
import calendarDateIcon from '../assets/img/date.svg'
import TimerIcon from '../assets/img/access_time.svg'
import circle_right_arrow_blue from '../assets/img/circle_right_arrow_blue.svg'
import circle_right_arrow_pink from '../assets/img/circle_right_arrow_pink.svg'
import circle_right_arrow_orange from '../assets/img/circle_right_arrow_orange.svg'
import calendar_event from '../assets/img/calendar_event.svg'
import Clipboard_list from '../assets/img/Clipboard_list.svg'
import homeActive from '../assets/footer-mobile/home_active.svg'
import profileIcon from '../assets/footer-mobile/My_Profile.svg'
import localOfferIcon from '../assets/footer-mobile/local_offer.svg'
import newsLaterIcon from '../assets/footer-mobile/Newspaper.svg'
import HelpFooterIcon from '../assets/footer-mobile/help_outline.svg'
import Chat from '../assets/img/Chat.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

const Dashboard = () => {

  return (
    <>
      <div className="p-[30px] bg-[#F0F0F0] min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        <div className="text-[20px] font-bold flex items-center gap-[10px] mb-[20px]">
          Hi <span className="text-[#9878DE]">John,</span> Good Morning
          <img src={morningImg} alt="morningImg" />
        </div>
        <Swiper
          spaceBetween={50}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 1,
              
            }
          }}
        >
          <SwiperSlide>
            <div>
              <img src={dashboardImg} alt='dashboardImg' className='rounded-[10px] object-cover w-full max-h-[330px] max-[767px]:h-[170px]' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={dashboardImg} alt='dashboardImg' className='rounded-[10px] object-cover w-full max-h-[330px] max-[767px]:h-[170px]' />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='mt-[25px]'>
          <div className="pb-[15px] flex flex-between">
            <div className='text-[20px] max-[767px]:text-[16px] text-[#000] font-bold flex-1'>To Do List</div>
            <div className='text-[18px] max-[767px]:text-[14px] text-[#787878] font-regular underline'>View All</div>
          </div>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 50
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 25
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide>
              <div className='to-do-card relative'>
                <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                  <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                  <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                </div>
                <div className='text-[16px] text-[#666] font-semibold'>
                  Categories: <span className='text-[#222]'>Personal</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='to-do-card relative'>
                <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                  <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                  <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                </div>
                <div className='text-[16px] text-[#666] font-semibold'>
                  Categories: <span className='text-[#222]'>Personal</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='to-do-card relative'>
                <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                  <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                  <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                </div>
                <div className='text-[16px] text-[#666] font-semibold'>
                  Categories: <span className='text-[#222]'>Personal</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='to-do-card relative'>
                <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                  <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                  <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                </div>
                <div className='text-[16px] text-[#666] font-semibold'>
                  Categories: <span className='text-[#222]'>Personal</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='mt-[25px]'>
          <div className="pb-[15px] flex flex-between">
            <div className='text-[20px] max-[767px]:text-[16px] text-[#000] font-bold flex-1'>Features</div>
            <div className='text-[18px] max-[767px]:text-[14px] text-[#787878] font-regular underline'>View All</div>
          </div>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
          >
            <SwiperSlide>
            <div className='feature-card relative'>
              <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#7aa0ff59] mb-[24px]'>
                <img src={calendar_event} alt='calendar_event' />
              </div>
              <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My Calendar
                <img src={circle_right_arrow_blue} alt='circle_right_arrow_blue' />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='feature-card relative'>
              <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff80a159] mb-[24px]'>
                <img src={Clipboard_list} alt='Clipboard_list' />
              </div>
              <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My notes
                <img src={circle_right_arrow_pink} alt='circle_right_arrow_pink' />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='feature-card relative'>
              <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#ff8b0f59] mb-[24px]'>
                <img src={Chat} alt='Chat' />
              </div>
              <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>Help Me
                <img src={circle_right_arrow_orange} alt='circle_right_arrow_orange' />
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
          <div className='grid grid-cols-4 max-[1280px]:grid-cols-3 max-[767px]:grid-cols-1 gap-[50px]'>
           
          </div>
        </div>
      </div>
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={homeActive} alt='homeActive'/></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Home</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={newsLaterIcon} alt='homeActive'/></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={HelpFooterIcon} alt='homeActive'/></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Help Me</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={localOfferIcon} alt='homeActive'/></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={profileIcon} alt='homeActive'/></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
