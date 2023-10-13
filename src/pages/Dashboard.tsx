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
import backarrowIcon from '../assets/img/backarrow.svg'
import arrowDownIcon from '../assets/img/keyboard_arrow_down.svg'
import Chat from '../assets/img/Chat.svg'
import check_box from '../assets/img/check_box.svg'
import searchIcon from '../assets/img/Search.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const Dashboard = () => {
  const [calendarShow, setCalendarShow] = useState(false)
  const [notesShow, setNotesShow] = useState(false)
  const [toDoListShow, setToDoListShow] = useState(false)
  const [analyticScheduleShow, setAnalyticScheduleShow] = useState(false)

  return (
    <>
      <div className="p-[30px] bg-[#F0F0F0] min-h-[calc(100vh_-_91px)] max-w-[calc(100vw_-_298px)] overflow-hidden max-[991px]:max-w-[100vw]">
        {!calendarShow && !toDoListShow && !notesShow && <>
          <div className='w-full'>
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
                <div className='text-[18px] max-[767px]:text-[14px] text-[#787878] font-regular underline cursor-pointer' onClick={() => setToDoListShow(true)}>View All</div>
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
                  <div
                    className='feature-card relative cursor-pointer'
                    onClick={() => setCalendarShow(true)}
                  >
                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-[#7aa0ff59] mb-[24px]'>
                      <img src={calendar_event} alt='calendar_event' />
                    </div>
                    <div className='text-[22px] text-[#000] font-bold flex items-center justify-between'>My Calendar
                      <img src={circle_right_arrow_blue} alt='circle_right_arrow_blue' />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='feature-card relative cursor-pointer'
                  onClick={() => setNotesShow(true)}>
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
            </div>
          </div>
        </>}
        {calendarShow &&
          <>
            {!analyticScheduleShow ? (
              <>
                <div className='w-full'>
                  <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                    <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setCalendarShow(false)} />
                    My Calendar
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}
                      >
                        <div className='bg-[#ff7e2eb3] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFA76E] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#A3BDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFA4BD] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#9878DE] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#B7A1E8] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#90DDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#FFE36B] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#88BB7C] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                      <div className='calendar-card relative cursor-pointer'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#7CA1FF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                        <div className='px-[10px] py-[5px] bg-[#A3BDFF] rounded-tl-[10px] absolute bottom-0 right-0 text-[#fff]'>
                          Open for Analysis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='w-full'>
                  <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                    <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer'
                      onClick={() => setAnalyticScheduleShow(false)} />
                    Analysis
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-1 min-[1199px]:grid-cols-2 gap-[25px] gap-y-[5px]">
                      <div className='calendar-card AnalysiCard relative'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Task Name</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Xyz</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#808080] font-[500] text-[16px]'>Module</div>
                          <div className='text-[#000] font-[600] text-[16px]'>Management</div>
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-[#000] font-[600] text-[16px]'>1,564 Words </div>
                          <div className='text-[#000] font-[600] text-[16px]'>2 Day's Left </div>
                        </div>
                      </div>
                      <div className='calendar-card relative AnalysiCard mb-[11px]'
                        onClick={() => setAnalyticScheduleShow(true)}>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center flex-col'>
                          <div className='text-[#000] font-[600] text-[16px] mb-[12px] border-b-[2px] border-[#222] px-[16px] '>Analysis</div>
                          <div className='text-[#000] font-[500] text-[14px]'>An ideal timeline to get this task done with perfect is <span className='text-[#6266FA] font-[700] '>8 days.</span></div>
                          <div className='text-[#000] font-[500] font-italic text-[14px]'>Currently you are </div>
                          <div className='text-[#FF0707] font-[700] text-[14px]'>LATE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-[20px]">
                    <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                      Meeting Schedule
                    </div>
                    <div className='bg-[#000] rounded-[7px] h-[33px] flex justify-center items-center px-[17px] text-[#fff] text-[14px] font-[600]'>Add Meeting Schedule</div>
                  </div>
                  <div className='mt-[12px]'>
                    <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 gap-[30px] gap-y-[0px]">
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                      <div className='calendar-card mettingCard relative'>
                        <div className='bg-[#FF7DA0] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>20 March 2023</div>
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='text-[#808080] font-[500] text-[12px]'>Date</div>
                          <div className='text-[#000] font-[600] text-[16px]'>02:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex justify-center pt-[105px]'>
                    <div className='bg-[#000] rounded-[12px] h-[55px] w-[335px] flex justify-center items-center px-[17px] text-[#fff] text-[16px] font-[700]'>Need Help?</div>
                  </div>
                </div>
              </>
            )}
          </>
        }
        {toDoListShow &&
          <div className='w-full'>
            <div className="flex justify-between items-center">
              <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setToDoListShow(false)} />
                To Do List
              </div>
              <div className='flex gap-[15px]'>
                <div className='w-[235px] text-[16px] font-[600] capitalize pl-[20px] pr-[15px] h-[41px] flex items-center justify-between bg-[#fff] rounded-[8px]'>
                  <div>All Categories</div>
                  <img src={arrowDownIcon} alt='arrowDownIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={searchIcon} alt='searchIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={check_box} alt='check_box' />
                </div>
              </div>
            </div>
            <div className='mt-[12px]'>
              <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-[25px] gap-y-[5px]">
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
                <div className='to-do-card relative'>
                  <div className='bg-[#B7A1E8] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA4BD] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA76E] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#A3BDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Pay Bills</div>
                  <div className='text-[14px] text-[#666] font-normal mb-[10px] flex gap-[20px] gap-y-[10px] flex-wrap'>
                    <div className='flex items-center gap-[5px]'><img src={calendarDateIcon} />Mon, 27-Feb-2023</div>
                    <div className='flex items-center gap-[5px]'><img src={TimerIcon} />02:10 pm</div>
                  </div>
                  <div className='text-[16px] text-[#666] font-semibold'>
                    Categories: <span className='text-[#222]'>Personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {notesShow &&
          <div className='w-full'>
            <div className="flex justify-between items-center">
              <div className="text-[20px] font-bold flex items-center gap-[10px]" >
                <img src={backarrowIcon} alt='backarrowIcon' className='mr-1 h-[24px] cursor-pointer' onClick={() => setNotesShow(false)} />
                My Notes
              </div>
              <div className='flex gap-[15px]'>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={searchIcon} alt='searchIcon' />
                </div>
                <div className='w-[40px] h-[41px] flex items-center justify-center bg-[#fff] rounded-[8px]'>
                  <img src={check_box} alt='check_box' />
                </div>
              </div>
            </div>
            <div className='mt-[12px]'>
              <div className="grid min-[768px]:grid-cols-2 min-[1199px]:grid-cols-2 min-[1440px]:grid-cols-3 gap-[25px] gap-y-[5px]">
                <div className='to-do-card relative'>
                  <div className='bg-[#7CA1FF66] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#B7A1E8] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA4BD] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFA76E] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#90DDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#FFE36B] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#88BB7C] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
                <div className='to-do-card relative'>
                  <div className='bg-[#A3BDFF] rounded-l-[10px] w-[12px] h-full absolute left-0 top-0'></div>
                  <div className='text-[22px] text-[#000] font-bold mb-[20px]'>Title</div>                  
                  <div className='text-[16px] text-[#666] font-semibold'>
                    <ul className='pl-5'>
                      <li className='list-disc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <footer className='sticky bottom-0 w-full bg-[#fff] h-[60px] z-10 min-[992px]:hidden'>
        <div className='grid grid-cols-5 h-full'>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div className='absolute top-0 w-full h-[2px] bg-[#9878DE]'></div>
            <div><img src={homeActive} alt='homeActive' /></div>
            <div className='text-[12px] text-[#9878DE] font-medium'>Home</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={newsLaterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Feeds</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={HelpFooterIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Help Me</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={localOfferIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Offers</div>
          </div>
          <div className='flex justify-center items-center flex-col relative gap-y-[5px]'>
            <div><img src={profileIcon} alt='homeActive' /></div>
            <div className='text-[12px] text-[#7B838A] font-medium'>Profile</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
